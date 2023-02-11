import moment from "moment";
import React from "react";
import { Card } from "react-bootstrap";
import PageTitle from "../../../../react-components/PageTitle/PageTitle";

const PoductGtinDetails = ({ data }: any) => {
  const dt = data?.product_obj;

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <PageTitle title="Product (GTIN) Details" />
          </Card.Title>
          <Card.Text>
            <div className="shipment-details">
              <div className="d-flex">
                <div className="label">Brand Name</div>
                <div className="text">{dt?.brand_name}</div>
              </div>
              <div className="d-flex">
                <div className="label">Labeler Name</div>
                <div className="text">{dt?.labeler_name}</div>
              </div>
              <div className="d-flex">
                <div className="label">Dosage </div>
                <div className="text">
                  {dt?.active_ingredients?.[0]?.strength}
                </div>
              </div>
              <div className="d-flex">
                <div className="label">Dosage Form</div>
                <div className="text">{dt?.dosage_form}</div>
              </div>
              <div className="d-flex">
                <div className="label">Package Description </div>
                <div className="text">{dt?.packaging?.[0]?.description}</div>
              </div>
              <div className="d-flex">
                <div className="label">Product NDC</div>
                <div className="text">{dt?.product_ndc}</div>
              </div>
              <div className="d-flex">
                <div className="label">GTIN</div>
                <div className="text">{dt?.gtin}</div>
              </div>
              <div className="d-flex">
                <div className="label">Mfg Name</div>
                <div className="text">{dt?.openfda?.manufacturer_name[0]}</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PoductGtinDetails;
