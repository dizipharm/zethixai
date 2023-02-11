import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Map from "./TrackTraceComponents/Map";
import ProductList from "./TrackTraceComponents/ProductList";
import ShipmentDetails from "./TrackTraceComponents/ShipmentDetails";
import ChainOfCustody from "./TrackTraceComponents/ChainOfCustody";
import AutoComplete from "../../../common/AutoComplete/AutoComplete";
import PoductGtinDetails from "./TrackTraceComponents/PoductGtinDetails";
import LotPackageDetails from "./TrackTraceComponents/LotPackageDetails";
import Loader from "../../../common/Loder";
import {
  traceBySSCC,
  gtinList,
  ssccnList,
  lotList,
  packageSnList,
  traceByGtin,
  gtnActiveCount,
  gtnInActiveCount,
} from "../../../services/trackTraceService";

const Trace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataAvailable, setDataAvailable] = useState(false);
  const [trackDataDispath, setTraceDataDispath] = useState<any[]>([]);
  const [trackDataDispathHistory, setTraceDataDispathHistory] = useState<any[]>(
    []
  );
  const [ssccnListData, setSsccnListData] = useState<any[]>([]);
  const [gtinListData, setGtinListData] = useState<any[]>([]);
  const [lotListData, setLotListData] = useState<any[]>([]);
  const [packageSnData, setPackageSnData] = useState<any[]>([]);

  const [selectBy, setSelectBy] = useState("");
  const [ssccValue, setSsccValue] = useState("");
  const [gtinValue, setGtinValue] = useState("");
  const [lotValue, setLotValue] = useState("");
  const [packageSnValue, setPackageSnValue] = useState("");
  const [gtnActiveCountValue, setGtnActiveCountValue] = useState("");
  const [gtnInActiveCountValue, setGtnInActiveCountValue] = useState("");

  const traceBySSCCFn = (ssccNo: string) => {
    setIsLoading(true);
    traceBySSCC(ssccNo)
      .then((res) => {
        const data = res?.data?.track;
        setIsLoading(false);
        setTraceDataDispath(data?.dispatch);
        setTraceDataDispathHistory(data?.dispatchhistory);
        setDataAvailable(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setDataAvailable(false);
      });
  };

  const gtnActiveCountFn = () => {
    setIsLoading(true);
    gtnActiveCount()
      .then((res) => {
        const data = res?.data?.count;
        setIsLoading(false);
        setGtnActiveCountValue(data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const gtnInActiveCountFn = () => {
    setIsLoading(true);
    gtnInActiveCount()
      .then((res) => {
        const data = res?.data?.count;
        setIsLoading(false);
        setGtnInActiveCountValue(data);
      })
      .catch((err) => {
        setIsLoading(false);
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

  const gtinListFn = () => {
    setIsLoading(true);
    gtinList()
      .then((res) => {
        const data = res?.data;
        setIsLoading(false);
        setGtinListData(data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const lotListFn = (gtin: string) => {
    setIsLoading(true);
    lotList(gtin)
      .then((res) => {
        const data = res?.data;
        setIsLoading(false);
        setLotListData(data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const packageSnListFn = (gtin: string, lot: string) => {
    setIsLoading(true);
    packageSnList(gtin, lot)
      .then((res) => {
        const data = res?.data;
        setIsLoading(false);
        setPackageSnData(data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleTraceSelect = (event: any) => {
    setSelectBy(event.target.value);
    setDataAvailable(false);
  };

  const handleTraceInput = (e: any, value: string) => {
    if (value === "sscn") {
      setSsccValue(e);
    } else if (value === "gtin") {
      setGtinValue(e);
      lotListFn(e);
    } else if (value === "lot") {
      setLotValue(e);
      packageSnListFn(gtinValue, e);
    } else if (value === "packageSn") {
      setPackageSnValue(e);
    }
  };

  const handleSearch = () => {
    if (selectBy === "traceBySSCCN") {
      traceBySSCCFn(ssccValue);
    } else if (selectBy === "traceByGTIN") {
      traceByGtinFn(gtinValue, lotValue, packageSnValue);
    }
  };

  const traceByGtinFn = (gtin: string, lot: string, packageSn: string) => {
    setIsLoading(true);
    traceByGtin(gtin, lot, packageSn)
      .then((res) => {
        const data = res?.data[0];
        setIsLoading(false);
        setTraceDataDispath(data);
        setTraceDataDispathHistory(data?.transactions);
        setDataAvailable(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setDataAvailable(false);
      });
  };

  useEffect(() => {
    gtinListFn();
    ssccnListFn();
    gtnActiveCountFn();
    gtnInActiveCountFn();
  }, []);

  return (
    <>
      <h1 className="page-title-no-border">
        <strong>Trace By</strong>
      </h1>

      <div className="row product-search">
        <div className="col-md-3 ps-0">
          <select
            className="form-select form-select form-select-sm mb-1"
            name="trackSelect"
            onChange={(e: any) => handleTraceSelect(e)}
          >
            <option value="">Select</option>
            <option value="traceByDrugName">By Drug Name/FDA NDC Code</option>
            <option value="traceByGTIN">By GTIN</option>
            <option value="traceByshipmentId">By Shipment ID</option>
            <option value="traceBySSCCN">By SSCCN</option>
          </select>
        </div>

        {selectBy !== "traceBySSCCN" && selectBy !== "traceByGTIN" && (
          <div className="col-md-3">
            <input className="form-control" />
          </div>
        )}

        {selectBy === "traceBySSCCN" && (
          <div className="col-md-3">
            <AutoComplete
              name="traceSsccName"
              suggestions={ssccnListData}
              onClickData={(e: any) => handleTraceInput(e, "sscn")}
              placeholder="Search SSCN"
            />
          </div>
        )}

        {selectBy === "traceByGTIN" && (
          <>
            <div className="col-md-3">
              <AutoComplete
                name="traceGtinName"
                suggestions={gtinListData}
                onClickData={(e: any) => handleTraceInput(e, "gtin")}
                placeholder="Search GTIN"
              />
              {gtinListData?.length > 0 && (
                <>
                  <small>GTIN Active Count : {gtnActiveCountValue} </small>{" "}
                  <br />
                  <small>GTIN In-Active count : {gtnInActiveCountValue} </small>
                </>
              )}
            </div>
            <div className="col-md-3">
              <AutoComplete
                name="traceLotName"
                suggestions={lotListData}
                onClickData={(e: any) => handleTraceInput(e, "lot")}
                placeholder="Search LOT"
              />
              {lotListData?.length > 0 && (
                <small> LOT Count : {lotListData?.length} </small>
              )}
            </div>
            <div className="col-md-3">
              <AutoComplete
                name="tracePackageSn"
                suggestions={packageSnData}
                onClickData={(e: any) => handleTraceInput(e, "packageSn")}
                placeholder="Search Package SN"
              />
              {packageSnData?.length > 0 && (
                <small>Unit Count : {packageSnData?.length} </small>
              )}
            </div>
          </>
        )}

        {selectBy !== "" && (
          <div className="col-md-2 ps-0">
            <button
              type="submit"
              className="btn secondary-btn"
              onClick={handleSearch}
            >
              Search <i className="fa-solid fa-angles-right"></i>
            </button>
          </div>
        )}
      </div>

      {dataAvailable && (
        <>
          <hr className="row-divider" />
          <Row className="mt-4">
            <Col md={5} className="p-0">
              {/* @ts-ignore */}
              {selectBy === "traceBySSCCN" && (
                <>
                  <ShipmentDetails data={trackDataDispath} />
                  <ProductList
                    data={trackDataDispath}
                    searchByValue={selectBy}
                  />
                </>
              )}
              {selectBy === "traceByGTIN" && (
                <>
                  <PoductGtinDetails data={trackDataDispath} />
                  <LotPackageDetails data={trackDataDispath} />
                </>
              )}
            </Col>

            <Col md={7}>
              <Row>
                <Col md={12}>
                  <Map data={trackDataDispathHistory} />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={12}>
                  <ChainOfCustody data={trackDataDispathHistory} type="trace" />
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

export default Trace;
