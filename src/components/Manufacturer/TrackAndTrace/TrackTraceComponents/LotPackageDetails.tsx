import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";
import PageTitle from "../../../../react-components/PageTitle/PageTitle";

const LotPackageDetails = ({ data }: any) => {
  const dt = data?.batch_obj;

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <PageTitle title="Lot &amp; Package Details" />
          </Card.Title>
          <Card.Text>
            <div className="shipment-details">
              <div className="d-flex">
                <div className="label">Unit Serial Number</div>
                <div className="text">{data?.package_sn}</div>
              </div>
              <div className="d-flex">
                <div className="label">Batch Code</div>
                <div className="text">{dt?.batch_code}</div>
              </div>
              <div className="d-flex">
                <div className="label">Manufacturing Date </div>
                <div className="text">
                  {dt && moment(dt?.manufacturing_date).format("DD-MMM-YYYY")}
                </div>
              </div>
              <div className="d-flex">
                <div className="label">Expiration Date</div>
                <div className="text">
                  {dt && moment(dt?.expiration_date).format("DD-MMM-YYYY")}{" "}
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default LotPackageDetails;
