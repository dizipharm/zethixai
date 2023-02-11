import moment from "moment";
import { Card } from "react-bootstrap";
import { apiUrl } from "../../../../config";

const ShipmentDetails = ({ data }: any) => {
  const dt = data[0];

  const URL = apiUrl + `/track-it?sscc_no=${dt.sscc_no}`;

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1 className="page-title big">Shipment Details</h1>
          </Card.Title>
          <Card.Text>
            <div className="shipment-details">
              <div className="d-flex">
                <div className="label">RN Number</div>
                <div className="text">{dt?.purchase_order}</div>
              </div>
              <div className="d-flex">
                <div className="label">Shipped Date - Time</div>
                <div className="text">
                  {dt &&
                    moment(dt?.shipped_date).format("DD-MMM-YYYY - h:mm a")}
                </div>
              </div>
              <div className="d-flex">
                <div className="label">Shipper Company Name</div>
                <div className="text">{dt && dt?.custodion_name}</div>
              </div>
              <div className="d-flex">
                <div className="label">Total Trade Units</div>
                <div className="text">{dt?.total_trade_units}</div>
              </div>
              <div className="d-flex">
                <div className="label">Package Type</div>
                <div className="text">{dt?.pack_type || "-"}</div>
              </div>
              <div className="d-flex">
                <div className="label">Inner Pack Type</div>
                <div className="text">{dt?.inner_pack_type || "-"}</div>
              </div>

              <div className="d-flex">
                <div className="label"> Net Weight</div>
                <div className="text">{dt?.pack_net_weight || "-"}</div>
              </div>
              <div className="d-flex">
                <div className="label"> Gross Weight</div>
                <div className="text">{dt?.pack_gross_weight || "-"}</div>
              </div>
              <div className="d-flex">
                <div className="label">Package Dimensions </div>
                <div className="text">{dt?.pack_dimensions || "-"}</div>
              </div>
              <div className="d-flex">
                <div className="label">QR Code</div>
                <div className="text">
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=${URL}`}
                  />
                </div>
              </div>
              <p className="mb-0 mt-2">
                <strong>Receiver Details</strong>
              </p>

              <div className="d-flex">
                <div className="label">Contact Name</div>
                <div className="text">{dt?.contact_name}</div>
              </div>
              <div className="d-flex">
                <div className="label">Contact Number</div>
                <div className="text">{dt?.contact_number}</div>
              </div>
              <div className="d-flex">
                <div className="label">Contact Email</div>
                <div className="text">{dt?.contact_email}</div>
              </div>
              <div className="d-flex">
                <div className="label">Delivery Address</div>
                <div className="text" style={{ width: "200px" }}>
                  {dt?.destination_address}
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShipmentDetails;
