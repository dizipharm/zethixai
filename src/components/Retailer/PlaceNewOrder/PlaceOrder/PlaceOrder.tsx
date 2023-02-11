import React, { useState, useEffect } from "react";
import { Col, FloatingLabel, Form, ListGroup, Row } from "react-bootstrap";
import { getUserData } from "../../../../services/AuthService";
import {
  cartDetails,
  deleteCart,
  placeOrder,
} from "../../../../services/cartService";
import Loader from "../../../../common/Loder";

import "./PlaceOrder.styles.scss";
import { futureDate, generateRandomValue } from "../../../../utils/utils";
import ErrorMsg from "../../../../common/ErrorMessage";
import { useUpdateCount } from "../../../../context/cartContext";

interface DataProps {
  brand_name: string;
  price: number;
  dosage_form: string;
  qty: number;
  company: string;
  product_ndc: string;
  cart_id: string;
}

interface Props {
  history: any;
  data: DataProps[];
}

const PlaceOrder = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartData, setCartData] = useState<any[]>([]);
  const [address, setAddress] = useState("");
  const [addressType, setAddressType] = useState("");
  const [destGln, setDestGln] = useState("BI12345132652");
  const [newDestGln, setNewDestGln] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const userData = getUserData();

  const buyer_gln = userData?.company.comapny_gln;
  const destination_gln = newDestGln ? newDestGln : destGln;
  const contact_name = userData?.first_name + " " + userData?.last_name;
  const contact_number = userData?.contact_no1;
  const contact_email = userData?.email;
  const buyer = userData?.company?._id;

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

  const cartDetailsData = () => {
    setIsLoading(true);
    cartDetails()
      .then((res) => {
        const cartData: any = [];

        res &&
          res.data.map((d: any) => {
            return cartData.push({
              cart_id: d._id,
              product_id: d.product._id,
              brand_name: d.product.brand_name,
              qty: d.qty,
              price: d.product.price,
              company: d.product.company,
              product_ndc: d.product.product_ndc,
              generic_name: d.product.generic_name,
            });
          });

        setCartData(cartData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const totalPrice =
    cartData && cartData.reduce((sum, i) => (sum += i.qty * i.price), 0);

  const totalQuantity =
    cartData && cartData.reduce((sum, i) => (sum += i.qty), 0);

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    if (addressType === "") {
      setErrMsg("Please select address or enter new address");
      setIsLoading(false);
      return false;
    } else if (addressType === "new" && (newDestGln === "" || address === "")) {
      setErrMsg("Please select address or enter new address");
      setIsLoading(false);
      return false;
    }

    const purchase_order = generateRandomValue();

    let users: any = [];
    let promises: any = [];
    for (let i = 0; i < cartData.length; i++) {
      const payload = {
        buyer_gln: buyer_gln,
        purchase_order: purchase_order,
        line_item: cartData[i].product_id,
        product_gtin: "NULL",
        product_ndc: cartData[i].product_ndc,
        line_item_qty: cartData[i].qty,
        total_trade_units: totalQuantity,
        total_cost: totalPrice,
        destination_gln: destination_gln,
        destination_address: address,
        exp_delivery_date: futureDate(3),
        contact_name: contact_name,
        contact_number: contact_number,
        contact_email: contact_email,
        buyer: buyer,
        supplier: cartData[i].company,
        generic_name: cartData[i].generic_name,
      };

      promises.push(
        await placeOrder(payload).then((response) => {
          users.push(response);
          deleteCart(cartData[i].cart_id)
            .then((res) => {
              cartDetailsData();
            })
            .catch((err) => {});
        })
      );
    }

    Promise.all(promises).then(() => {
      setIsLoading(false);
      props.history.push(`/distributor/order-success/${purchase_order}`);
    });
  };

  useEffect(() => {
    cartDetailsData();
  }, []);

  return (
    <>
      <Row className="place-order-div mt-4">
        <Col md={7} className="ps-0">
          <h1 className="page-title big">Place Order</h1>
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
                  <FloatingLabel
                    controlId="ContactNumber"
                    label="Contact Number"
                  >
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
                  value="2396 Hiney Road, Las Vegas, Nevada, Zip code-89104, United States"
                />
                <label className="form-check-label">
                  2396 Hiney Road, Las Vegas, Nevada, Zip code-89104, United
                  States
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
          <ErrorMsg errMsg={errMsg} className="mt-3" />
          <hr className="row-divider" />
          <button
            className="btn secondary-btn float-end mt-2"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </Col>
        <Col md={5}>
          <h1 className="page-title big">Your cart</h1>
          <ListGroup className="cart-order-details">
            {cartData &&
              cartData.length > 0 &&
              cartData.map((cd, i) => {
                return (
                  <ListGroup.Item
                    key={i}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div className="name">
                      {cd.brand_name} ({cd.qty})
                    </div>
                    <div className="price">
                      {(cd.price && cd.price * cd.qty).toFixed(2)} USD
                    </div>
                  </ListGroup.Item>
                );
              })}

            <ListGroup.Item className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <span>
                  <strong> Total </strong>
                </span>
              </div>
              <strong> {totalPrice.toFixed(2)} USD</strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {isLoading && <Loader />}
    </>
  );
};

export default PlaceOrder;
