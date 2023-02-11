import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { getCompanyType, capitalize } from "../../services/AuthService";
import { Badge, Table } from "react-bootstrap";

interface tableProps {
  data: Array<any>;
  viewSingleOrderFn: (orderID: string) => void;
  acceptOrderFn?: any;
  rejectOrderFn?: any;
  openShipmentModal?: any;
  orderType: string;
}

const OrderTable = ({
  data,
  orderType,
  viewSingleOrderFn,
  acceptOrderFn,
  rejectOrderFn,
  openShipmentModal,
}: tableProps) => {
  const companyType = getCompanyType();

  return (
    <>
      <Table className="order-table">
        <thead>
          <tr className="order-thead-tr">
            <th>Date of order</th>
            <th>Reference Number</th>
            <th className="text-center">Total Items</th>
            <th>Order Placed By</th>
            <th>Delivery address</th>
            {orderType === "MYORDERS" && <th>Status</th>}
            <th className="text-center">Order Details</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((d, i) => {
              let status;
              if (d.order_status === 0) {
                status = <Badge bg="secondary">New</Badge>;
              } else if (d.order_status === 1) {
                status = <Badge bg="success">Accepted</Badge>;
              } else if (d.order_status === 4) {
                status = <Badge bg="danger">Rejected</Badge>;
              } else if (d.order_status === 5) {
                status = <Badge bg="info">Shipped</Badge>;
              }
              return (
                <tr className="" key={i}>
                  <td className="order-date">
                    {moment(d.order_date).format("DD-MMM-YYYY")}
                  </td>
                  <td className="order-id">{d.purchase_order}</td>
                  <td className="order-total"> {d.total_trade_units} </td>
                  <td className="order-placed-by">
                    {d.contact_name} <br />
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="phone-in-order"
                    />
                    {d.contact_number}
                  </td>
                  <td className="order-address">{d.destination_address}</td>
                  {orderType === "MYORDERS" && (
                    <td className="order-status">{status}</td>
                  )}
                  <td className="orders-btn">
                    <button
                      className="btn btn-sm btn-info me-1"
                      onClick={() => viewSingleOrderFn(d.purchase_order)}
                    >
                      View
                    </button>

                    {orderType === "NEW" && (
                      <>
                        <button
                          className="btn btn-sm btn-success me-1"
                          onClick={() => acceptOrderFn(d._id)}
                        >
                          Accept
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => rejectOrderFn(d._id)}
                        >
                          Reject
                        </button>
                      </>
                    )}

                    {companyType === 0 && orderType === "ACCEPTED" && (
                      <button
                        className="btn btn-sm btn-shipping"
                        onClick={() => openShipmentModal(d.purchase_order)}
                      >
                        Create Shippment
                      </button>
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="order-empty-data">
              <td colSpan={6} className="text-center">
                No Records Available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default OrderTable;
