import React from "react";
import PageTitle from "../../../../react-components/PageTitle/PageTitle";
import { trackEventFn } from "./trackEvent";

const ShipmentTracking = ({ data }: any) => {
  let shipped = false;
  let lpsReceived = false;
  let inTransit = false;
  let delivered = false;
  let received = false;
  data.length > 0 &&
    data.map((d: any, i: number) => {
      if (d.event === "DISPATCH") {
        shipped = true;
      } else if (d.event === "LSPRECEIVED") {
        lpsReceived = true;
      } else if (d.event === "IN-TRANSIT") {
        inTransit = true;
      } else if (d.event === "DELIVERED") {
        delivered = true;
      } else if (d.event === "RECEIVED") {
        received = true;
      }
    });

  return (
    <>
      <PageTitle title="Shipment Tracking" />

      <ul className="progress-tracker progress-tracker--text progress-tracker--center">
        <li className={` progress-step ${shipped ? "is-complete" : ""}`}>
          <div className="progress-marker"></div>
          <div className="progress-text">
            <h4 className="progress-title">Shipped</h4>
          </div>
        </li>

        <li className={` progress-step ${lpsReceived ? "is-complete" : ""}`}>
          <div className="progress-marker"></div>
          <div className="progress-text">
            <h4 className="progress-title">Shipper Received</h4>
          </div>
        </li>

        <li className={` progress-step ${inTransit ? "is-complete" : ""}`}>
          <div className="progress-marker"></div>
          <div className="progress-text">
            <h4 className="progress-title">In Transit</h4>
          </div>
        </li>

        <li className={` progress-step ${delivered ? "is-complete" : ""}`}>
          <div className="progress-marker"></div>
          <div className="progress-text">
            <h4 className="progress-title">Shipper Delivered</h4>
          </div>
        </li>

        <li className={` progress-step ${received ? "is-complete" : ""}`}>
          <div className="progress-marker"></div>
          <div className="progress-text">
            <h4 className="progress-title">Received</h4>
          </div>
        </li>
      </ul>
    </>
  );
};

export default ShipmentTracking;
