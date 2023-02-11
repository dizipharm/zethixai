import { useEffect } from "react";
import { Modal, Table } from "react-bootstrap";

const ViewOrderModal = (props: any) => {
  const { show, modaldetails, orderType, closeOrderModal } = props;
  let data = modaldetails;

  return (
    <Modal
      size="xl"
      show={show}
      onHide={closeOrderModal}
      className="order-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5> Order Details</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Table className="order-table">
            <thead>
              <tr>
                <th>Drug Name</th>
                <th>Quantity</th>
                <th>Brand Name</th>
                <th>Product NDC</th>
                <th>Dosage</th>
                <th>Package Details</th>

                {orderType === "NEW" && <th></th>}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length > 0 &&
                data.map((data: any, i: any) => {
                  return (
                    <tr className="">
                      <td className="order-drug">{data.generic_name} </td>
                      <td className="order-total">{data.line_item_qty}</td>
                      <td className="order-brand"> {data.line_item} </td>
                      <td className="order-ndc">{data.product_ndc}</td>
                      <td className=""> </td>
                      <td className=""> </td>
                      {orderType === "NEW" && (
                        <td className="orders-btn">
                          <button className="btn btn-sm btn-success me-1">
                            Accept
                          </button>

                          <button className="btn btn-sm btn-danger">
                            Reject
                          </button>
                        </td>
                      )}
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </>
      </Modal.Body>
    </Modal>
  );
};

export default ViewOrderModal;
