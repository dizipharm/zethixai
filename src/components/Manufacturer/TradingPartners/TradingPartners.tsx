import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import {
  tradingPartners,
  acceptPartner,
  rejectPartner,
} from "../../../services/tradingService";
import AcceptedPartnets from "./AcceptedPartnets";
import NewPartnets from "./NewPartnets";
import RejectedPartnets from "./RejectedPartnets";
import Loader from "../../../common/Loder";
import { getCompanyType } from "../../../services/AuthService";
import { useHistory, useLocation } from "react-router-dom";

const TradingPartners = () => {
  const [newPartnersData, setNewPartnersData] = useState<any[]>([]);
  const [acceptedPartnersData, setAcceptedPartnersData] = useState<any[]>([]);
  const [rejectedPartnersData, setRejectedPartnersData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderType, setOrderType] = useState("NEW");
  const [modalShow, setModalShow] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const [totalRecords, setTotalRecords] = useState(0);
  const [skipRecords, setSkipRecords] = useState(0);

  const companyType = getCompanyType();
  const history = useHistory();
  const { pathname } = useLocation();

  const newPartnetsPath = "/manufacturer/trading-partners/new";
  const acceptedPartnetsPath = "/manufacturer/trading-partners/accepted";
  const rejectedPartnetsPath = "/manufacturer/trading-partners/rejected";

  const newPartnetsPathFn = () => {
    history.push(newPartnetsPath);
  };

  const acceptedPartnetsPathFn = () => {
    history.push(acceptedPartnetsPath);
  };

  const rejectedPartnetsPathFn = () => {
    history.push(rejectedPartnetsPath);
  };

  const tradingPartnersFn = (orderType: string, skipRecords?: number) => {
    setIsLoading(true);
    tradingPartners(orderType, skipRecords)
      .then((res) => {
        const resData = res.data;
        let totalProducts = res.headers["x-total-count"];
        totalProducts && Number(totalProducts);
        setTotalRecords(Number(totalProducts));
        if (orderType === "NEW") setNewPartnersData(resData);
        if (orderType === "ACCEPTED") setAcceptedPartnersData(resData);
        if (orderType === "REJECTED") setRejectedPartnersData(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const acceptPartnerFn = (orderID: string) => {
    setIsLoading(true);
    acceptPartner(orderID)
      .then((res) => {
        tradingPartnersFn("NEW");
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const rejectPartnerFn = (orderID: string) => {
    setIsLoading(true);
    rejectPartner(orderID)
      .then((res) => {
        tradingPartnersFn("NEW");
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const viewSingleOrderFn = (purchaseOrderID: string) => {
    // setIsLoading(true);
    // viewSingleOrder(purchaseOrderID)
    //   .then((res) => {
    //     setIsLoading(false);
    //     setModalShow(true);
    //     setModalDetails(res.data);
    //   })
    //   .catch((err) => {
    //     setIsLoading(false);
    //   });
  };

  const handleOrderType = (type: any) => {
    setOrderType(type);

    if (type === "NEW") {
      newPartnetsPathFn();
      setSkipRecords(0);
    } else if (type === "ACCEPTED") {
      acceptedPartnetsPathFn();
      setSkipRecords(0);
    } else if (type === "REJECTED") {
      rejectedPartnetsPathFn();
      setSkipRecords(0);
    }
  };

  useEffect(() => {
    if (companyType === 0) {
      setOrderType("NEW");
    } else {
      setOrderType("ACCEPTED");
    }
  }, []);

  useEffect(() => {
    if (pathname === newPartnetsPath) {
      setOrderType("NEW");
      tradingPartnersFn("NEW");
    } else if (pathname === acceptedPartnetsPath) {
      setOrderType("ACCEPTED");
      tradingPartnersFn("ACCEPTED");
    } else if (pathname === rejectedPartnetsPath) {
      setOrderType("REJECTED");
      tradingPartnersFn("REJECTED");
    }
  }, [pathname]);

  return (
    <>
      <Nav
        variant="pills"
        activeKey={orderType}
        onSelect={(eventKey: any) => handleOrderType(eventKey)}
        className="order-nav mb-3"
      >
        <Nav.Item>
          <Nav.Link eventKey="NEW" className="ps-2">
            New Partner Request
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="ACCEPTED" className="ps-2">
            Accepted Partners
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="REJECTED">Rejected Partners</Nav.Link>
        </Nav.Item>
      </Nav>
      {orderType === "NEW" && (
        <NewPartnets
          data={newPartnersData}
          viewSingleOrderFn={viewSingleOrderFn}
          acceptPartnerFn={acceptPartnerFn}
          rejectPartnerFn={rejectPartnerFn}
          orderType="NEW"
        />
      )}
      {orderType === "ACCEPTED" && (
        <AcceptedPartnets
          data={acceptedPartnersData}
          viewSingleOrderFn={viewSingleOrderFn}
          orderType="ACCEPTED"
        />
      )}
      {orderType === "REJECTED" && (
        <RejectedPartnets
          data={rejectedPartnersData}
          viewSingleOrderFn={viewSingleOrderFn}
          orderType="REJECTED"
        />
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default TradingPartners;
