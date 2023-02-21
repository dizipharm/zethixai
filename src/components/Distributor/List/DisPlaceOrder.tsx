import React, { useState, useEffect } from "react";
import { Button, Col, FloatingLabel, Form, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postSelectedSpecsData } from "../../../services/retailerService";
import { getUserData } from "../../../services/AuthService";

// getting the values of session storage
const getDatafromLS = (name: string) => {
  const data = sessionStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export const DisList = () => {
  const [books, setbooks] = useState(getDatafromLS("CarbonCalcList"));

  // input field states
  const [gia, setGia] = useState(getDatafromLS("gia"));

  const [isLoading, setIsLoading] = useState(false);
  const [cartData, setCartData] = useState<any[]>([]);
  const [address, setAddress] = useState("");
  const [addressType, setAddressType] = useState("");
  const [destGln, setDestGln] = useState("BI12345132652");
  const [newDestGln, setNewDestGln] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const userData = getUserData();

  const handleSelectAddress = (e: any, type: any) => {
    setAddressType(type);
    setErrMsg("");
    if (type === "existing") {
      setAddress(e.target.value);
      setNewDestGln("");
    }
  };

  const handleEnterAddress = (e: any) => {
    setAddress(e.target.value);
    setErrMsg("");
  };

  const handleNewGln = (e: any) => {
    setNewDestGln(e.target.value);
    setErrMsg("");
  };

  useEffect(() => {
    sessionStorage.setItem("CarbonCalcList", JSON.stringify(books));
  }, [books]);

  const submitData = () => {
    let data: any[] = [];
    books.forEach((each: any) => {
      console.log(each);
      data.push({
        carbon_table: Number(each["materialSpec"].split(";")[1]),
        substructural_element: Number(each["StructrualElem"].split(";")[1]),
        element_group: Number(each["ele"].split(";")[1]),
        quantity: Number(each["isbn"]),
        gia: Number(gia),
      });
    });
    postSelectedSpecsData(data);
    sessionStorage.removeItem("CarbonCalcList");
    sessionStorage.removeItem("gia");
  };

  return (
    <>
      <Row className="place-order-div mt-4">
        <Col md={7} className="ps-0">

          <h1>Address </h1>

          <Form>
            <Row>
              <Col md={6} className="ps-0">
                <div className="form-react-bootstrap">
                  <FloatingLabel controlId="FirstName" label="First Name">
                    <Form.Control
                      type="text"
                      value={userData.first_name}
                      placeholder="First Name"
                      className="text-capitalize"
                      disabled
                    />
                  </FloatingLabel>
                </div>
              </Col>
              <Col md={6} className="pe-0">
                <div className="form-react-bootstrap">
                  <FloatingLabel controlId="LastName" label="Last Name">
                    <Form.Control
                      type="text"
                      value={userData.last_name}
                      placeholder="First Name"
                      className="text-capitalize"
                      disabled
                    />
                  </FloatingLabel>
                </div>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col md={6} className="ps-0">
                <div className="form-react-bootstrap">
                  <FloatingLabel controlId="ContactNumber" label="Contact Number">
                    <Form.Control
                      type="text"
                      value={userData.contact_no1}
                      placeholder="Contact Number"
                      className="text-capitalize"
                      disabled
                    />
                  </FloatingLabel>
                </div>
              </Col>
              <Col md={6} className="pe-0">
                <div className="form-react-bootstrap">
                  <FloatingLabel controlId="ContactEmail" label="Contact Email">
                    <Form.Control
                      type="text"
                      value={userData.email}
                      placeholder="Contact Email"
                      className="text-capitalize"
                      disabled
                    />
                  </FloatingLabel>
                </div>
              </Col>
            </Row>
            <Row className="mt-1 lh-lg">
              <label className="form-label p-0">
                Address &amp; Destination GLN
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radio"
                  onChange={(e) => handleSelectAddress(e, "existing")}
                  value="144 Windmill Road, London, Nevada, Zip code-89104, United Kingdom"
                />
                <label className="form-check-label">
                  144 Windmill Road, London, United
                  Kingdom
                </label>{" "}
                <br />
                <span>GLN: {destGln}</span>
              </div>
            </Row>

            <Row className="mt-1 lh-lg">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="radio"
                  onChange={(e) => handleSelectAddress(e, "new")}
                />
                <label className="form-check-label" style={{ width: "100%" }}>
                  <Form.Control
                    as="textarea"
                    className="mb-2"
                    onChange={handleEnterAddress}
                    style={{ height: "100px !important" }}
                  />
                  <Form.Control type="text" onChange={handleNewGln} />
                </label>
              </div>
            </Row>
          </Form>
        </Col>

        <Col md={5}>
          <h1 className="page-title big"> Your List</h1>
          <ListGroup className="cart-order-details">
            <table className='table'>
              <thead>
                <tr>
                  <th>Material Specifications</th>
                  <th>Structural Element</th>
                  <th>Element Group</th>
                  <th>Quantity</th>

                </tr>
              </thead>
              <tbody>
                {books &&
                  books.length > 0 &&

                  books.map((book: any, index: any) => {
                    return (

                      <tr key={index}>
                        <td>{book.materialSpec.split(';')[0]}</td>
                        <td>{book.StructrualElem.split(';')[0]}</td>
                        <td>{book.ele.split(';')[0]}</td>
                        <td>{book.isbn.split(';')[0]}</td>
                      </tr>


                    )
                  }

                  )}
              </tbody>
            </table>

            <ListGroup.Item>
              <Link to="/distributor/list">
                <button className="btn btn-warning btn-md">Back</button>
              </Link>
              <Link to="/distributor/ordersuccess">

                <Button
                  onClick={() => submitData()}
                  variant="success">Place Order</Button>{' '}

              </Link>
            </ListGroup.Item>



          </ListGroup>

        </Col>
      </Row>
    </>
  );
};

export default DisList;
