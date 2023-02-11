import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Map from "./TrackTraceComponents/Map";
import ProductList from "./TrackTraceComponents/ProductList";
import ShipmentDetails from "./TrackTraceComponents/ShipmentDetails";
import ShipmentTracking from "./TrackTraceComponents/ShipmentTracking";
import { trackBySSCC, ssccnList } from "../../../services/trackTraceService";
import Loader from "../../../common/Loder";
import ShipmentTrackingFlow from "./TrackTraceComponents/ShipmentTrackingFlow";
import ChainOfCustody from "./TrackTraceComponents/ChainOfCustody";
import AutoComplete from "../../../common/AutoComplete/AutoComplete";
import CurrentEventDetails from "./TrackTraceComponents/CurrentEventDetails";

const Track = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [trackDataDispath, setTrackDataDispath] = useState<any[]>([]);
  const [trackDataDispathHistory, setTrackDataDispathHistory] = useState<any[]>(
    []
  );

  const [ssccnListData, setSsccnListData] = useState<any[]>([]);

  const [selectBy, setSelectBy] = useState("");
  const [ssccValue, setSsccValue] = useState("");

  const trackBySSCCFn = (ssccNo: string) => {
    setIsLoading(true);
    trackBySSCC(ssccNo)
      .then((res) => {
        const data = res?.data?.track;
        setIsLoading(false);
        setTrackDataDispath(data?.dispatch);
        setTrackDataDispathHistory(data?.dispatchhistory);
        setDataAvailable(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setDataAvailable(false);
      });
  };

  const ssccnListFn = () => {
    setIsLoading(true);
    ssccnList()
      .then((res) => {
        const data = res?.data;
        setIsLoading(false);
        setSsccnListData(data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleTrackSelect = (event: any) => {
    setSelectBy(event.target.value);
    setDataAvailable(false);
  };

  const handleTrackInput = (e: any, value: string) => {
    if (value === "sscn") {
      setSsccValue(e);
    }
  };

  const handleSearch = () => {
    if (selectBy === "trackBySsccn") {
      trackBySSCCFn(ssccValue);
    }
  };

  useEffect(() => {
    ssccnListFn();
  }, []);

  return (
    <>
      <h1 className="page-title-no-border">
        <strong>Track By</strong>
      </h1>

      <div className="row product-search">
        <div className="col-md-4 ps-0">
          <select
            className="form-select form-select form-select-sm"
            name="trackSelect"
            onChange={(e: any) => handleTrackSelect(e)}
          >
            <option value="">Select</option>
            <option value="trachShipmentID"> By Shipment ID</option>
            <option value="trackBySsccn"> By SSCCN</option>
          </select>
        </div>

        {selectBy === "trackBySsccn" && (
          <div className="col-md-4">
            <AutoComplete
              name="traceInput"
              suggestions={ssccnListData}
              onClickData={(e: any) => handleTrackInput(e, "sscn")}
              placeholder="Search SSCN"
            />
          </div>
        )}

        {selectBy !== "trackBySsccn" && (
          <div className="col-md-4">
            <input className="form-control" />
          </div>
        )}

        <div className="col-md-2 ps-0">
          <button
            type="submit"
            className="btn secondary-btn"
            onClick={handleSearch}
          >
            Search <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>

      {dataAvailable && (
        <>
          <hr className="row-divider" />
          <Row className="mt-4">
            <ShipmentTracking data={trackDataDispathHistory} />
          </Row>
          <Row>
            <Col md={5} className="p-0">
              <ShipmentDetails data={trackDataDispath} />
              <ProductList data={trackDataDispath} />
              <CurrentEventDetails
                data={trackDataDispath}
                dataHistory={trackDataDispathHistory}
              />
            </Col>

            <Col md={7}>
              <Row>
                <Col md={12}>
                  <Map data={trackDataDispathHistory} />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={5}>
                  <ShipmentTrackingFlow data={trackDataDispathHistory} />
                </Col>
                <Col md={7}>
                  <ChainOfCustody data={trackDataDispathHistory} type="track" />
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default Track;
