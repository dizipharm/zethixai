import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";
import PageTitle from "../../../../react-components/PageTitle/PageTitle";

const CurrentEventDetails = ({ data, dataHistory }: any) => {
  const dt = data[0];
  const currentState = dataHistory?.length === 0 ? 0 : dataHistory?.length - 1;
  const currentEvt = dataHistory?.[currentState];
  let prevEvt;
  if (currentState !== 0) {
    prevEvt = dataHistory?.[currentState - 1];
  }

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <PageTitle title="Current Owner Details" />
          </Card.Title>
          <Card.Text>
            <div className="shipment-details">
              <div className="d-flex">
                <div className="label">Entry location </div>
                <div className="text width-200">
                  {dt?.pickup_loc_gln?.address1 || "-"}
                </div>
              </div>

              <div className="d-flex">
                <div className="label">Current location</div>
                <div className="text width-200">
                  {currentEvt?.address || "-"}
                </div>
              </div>
              <div className="d-flex">
                <div className="label">Exit location</div>
                <div className="text width-200">
                  {dt?.destination_address || "-"}
                </div>
              </div>
              <p className="mb-0 mt-2">
                <strong>Previos Owner Details</strong>
              </p>

              <div className="d-flex">
                <div className="label">Current Owner</div>
                <div className="text">
                  {prevEvt?.updated_by?.company?.company_name || "-"}
                </div>
              </div>
              <div className="d-flex">
                <div className="label">Company GLN</div>
                <div className="text">
                  {" "}
                  {prevEvt?.updated_by?.company?.comapny_gln || "-"}
                </div>
              </div>
              <div className="d-flex">
                <div className="label">Current Event</div>
                <div className="text">{prevEvt?.event || "-"}</div>
              </div>

              <div className="d-flex">
                <div className="label"> Date &amp; Time</div>
                <div className="text">
                  {(prevEvt?.updatedAt &&
                    moment(prevEvt?.updatedAt).format(
                      "DD-MMM-YYYY - h:mm a"
                    )) ||
                    ""}
                </div>
              </div>

              <p className="mb-0 mt-2">
                <strong>Current Event Details</strong>
              </p>

              <div className="d-flex">
                <div className="label">Current Owner</div>
                <div className="text">
                  {currentEvt?.updated_by?.company?.company_name || "-"}
                </div>
              </div>
              <div className="d-flex">
                <div className="label">Company GLN</div>
                <div className="text">
                  {" "}
                  {currentEvt?.updated_by?.company?.comapny_gln || "-"}
                </div>
              </div>
              <div className="d-flex">
                <div className="label">Current Event</div>
                <div className="text">{currentEvt?.event || "-"}</div>
              </div>

              <div className="d-flex">
                <div className="label"> Date &amp; Time</div>
                <div className="text">
                  {" "}
                  {moment(currentEvt?.updatedAt).format(
                    "DD-MMM-YYYY - h:mm a"
                  ) || ""}
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CurrentEventDetails;
