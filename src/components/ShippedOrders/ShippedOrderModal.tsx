import moment from "moment";
import React from "react";
import { Col, Modal, Row, Table } from "react-bootstrap";
import styles from "./shippedOrdered.module.scss";

const ShippedOrderModal = (props: any) => {
  const { show, modaldetails, orderType, closeOrderModal } = props;
  let data = modaldetails;
  return (
    <Modal
      size="xl"
      show={show}
      onHide={closeOrderModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5> Shipped Order Details</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <Table className="order-table">
            <thead>
              <tr>
                <th>Shipment No</th>
                <th>Consignment No</th>
                <th>Package GTIN</th>
                <th>Line Item Quantity</th>
                <th>Product NDC</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length > 0 &&
                data.map((data: any, i: any) => {
                  return (
                    <tr className="">
                      <td>{data.shipment_no} </td>
                      <td> {data.consignment_no} </td>
                      <td>{data.package_gtin}</td>
                      <td>{data.line_item_qty}</td>
                      <td>{data.product_ndc}</td>
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

export default ShippedOrderModal;
