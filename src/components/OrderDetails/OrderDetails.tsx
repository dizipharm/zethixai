import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import {
  viewSingleOrder,
  acceptOrder,
  rejectOrder,
  ordersList,
  myOrdersList,
  viewShipperList,
  locationList,
} from "../../services/orderService";
import AcceptedOrders from "./AcceptedOrders";
import NewOrders from "./NewOrders";
import "./OrderDetails.styles.scss";
import RejectedOrders from "./RejectedOrders";
import Loader from "../../common/Loder";
import ViewOrderModal from "./ViewOrderModal";
import { getCompanyType } from "../../services/AuthService";
import PaginationWrapper from "../../common/Pagination/Pagination";
import { useHistory, useLocation } from "react-router-dom";

const OrderDetails = () => {
  const [myOrdersData, setMyOrdersData] = useState<any[]>([]);
  const [newOrdersData, setNewOrdersData] = useState<any[]>([]);
  const [acceptedOrdersData, setAcceptedOrdersData] = useState<any[]>([]);
  const [rejectedOrdersData, setRejectedOrdersData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [orderType, setOrderType] = useState("NEW");
  const [modalShow, setModalShow] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const [shipperList, setShipperList] = useState<any[]>([]);
  const [locationListData, setLocationList] = useState<any[]>([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [skipRecords, setSkipRecords] = useState(0);

  const companyType = getCompanyType();
  const history = useHistory();
  const { pathname } = useLocation();

  const myOrdersPath = "/distributor/order-management/my-orders";
  const myOrdersManfPath = "/manufacturer/order-management/my-orders";

  const newOrdersPath = "/distributor/order-management/new-orders";
  const newOrdersManfPath = "/manufacturer/order-management/new-orders";
  const acceptedOrdersPath = "/distributor/order-management/accepted-orders";
  const acceptedOrdersManfPath =
    "/manufacturer/order-management/accepted-orders";
  const rejectedOrdersPath = "/distributor/order-management/rejected-orders";
  const rejectedOrdersManfPath =
    "/manufacturer/order-management/rejected-orders";

  const myOrdersPathFn = () => {
    if (pathname.includes("distributor")) {
      history.push(myOrdersPath);
    } else {
      history.push(myOrdersManfPath);
    }
  };

  const newOrdersPathFn = () => {
    if (pathname.includes("distributor")) {
      history.push(newOrdersPath);
    } else {
      history.push(newOrdersManfPath);
    }
  };

  const acceptedOrdersPathFn = () => {
    if (pathname.includes("distributor")) {
      history.push(acceptedOrdersPath);
    } else {
      history.push(acceptedOrdersManfPath);
    }
  };

  const rejectedOrdersPathFn = () => {
    if (pathname.includes("distributor")) {
      history.push(rejectedOrdersPath);
    } else {
      history.push(rejectedOrdersManfPath);
    }
  };

  const closeOrderModal = () => {
    setModalShow(false);
  };

  const myOrdersListFn = (skipRecords?: number) => {
    setIsLoading(true);
    myOrdersList(skipRecords)
      .then((res) => {
        const resData = res.data;
        let totalProducts = res.headers["x-total-count"];
        totalProducts && Number(totalProducts);
        setTotalRecords(Number(totalProducts));
        setMyOrdersData(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const ordersListFn = (orderType: string, skipRecords?: number) => {
    setIsLoading(true);
    ordersList(orderType, skipRecords)
      .then((res) => {
        const resData = res.data;
        let totalProducts = res.headers["x-total-count"];
        totalProducts && Number(totalProducts);
        setTotalRecords(Number(totalProducts));
        if (orderType === "NEW") setNewOrdersData(resData);
        if (orderType === "ACCEPTED") setAcceptedOrdersData(resData);
        if (orderType === "REJECTED") setRejectedOrdersData(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const acceptOrderFn = (orderID: string) => {
    setIsLoading(true);
    acceptOrder(orderID)
      .then((res) => {
        ordersListFn(orderType);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const rejectOrderFn = (orderID: string) => {
    setIsLoading(true);
    rejectOrder(orderID)
      .then((res) => {
        ordersListFn(orderType);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const viewSingleOrderFn = (purchaseOrderID: string) => {
    setIsLoading(true);
    viewSingleOrder(purchaseOrderID)
      .then((res) => {
        setIsLoading(false);
        setModalShow(true);
        setModalDetails(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const viewShipperListFn = () => {
    setIsLoading(true);
    viewShipperList()
      .then((res) => {
        setIsLoading(false);
        const resData = res.data;
        let shipArray: any = [];
        resData.map((d: any, i: number) => {
          shipArray.push({ _id: i, optValue: d.admin, name: d.company_name });
        });
        setShipperList(shipArray);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const locationListFn = () => {
    setIsLoading(true);
    locationList()
      .then((res) => {
        setIsLoading(false);
        const resData = res.data;
        let locArray: any = [];
        resData.map((d: any, i: number) => {
          locArray.push({ _id: i, optValue: d._id, name: d.address1 });
        });
        setLocationList(locArray);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleOrderType = (type: any) => {
    setOrderType(type);

    if (type === "NEW") {
      newOrdersPathFn();
      setSkipRecords(0);
    } else if (type === "ACCEPTED") {
      acceptedOrdersPathFn();
      setSkipRecords(0);
    } else if (type === "REJECTED") {
      rejectedOrdersPathFn();
      setSkipRecords(0);
    } else if (type === "MYORDERS") {
      myOrdersPathFn();
      setSkipRecords(0);
    }
  };

  const onPageChanged = (currentPage: any) => {
    let currentPageValue = currentPage - 1;
    let skipRecords = Number("" + currentPageValue + 0);
    setSkipRecords(skipRecords);
    if (orderType === "MYORDERS") {
      myOrdersListFn(skipRecords);
    } else {
      ordersListFn(orderType, skipRecords);
    }
  };

  // useEffect(() => {
  //   if (companyType === 0) {
  //     ordersListFn("NEW");
  //     setOrderType("NEW");
  //   } else {
  //     ordersListFn("ACCEPTED");
  //     setOrderType("ACCEPTED");
  //   }
  // }, []);

  useEffect(() => {
    if (pathname === newOrdersPath || pathname === newOrdersManfPath) {
      ordersListFn("NEW");
      setOrderType("NEW");
    } else if (
      pathname === acceptedOrdersPath ||
      pathname === acceptedOrdersManfPath
    ) {
      ordersListFn("ACCEPTED");
      setOrderType("ACCEPTED");
      viewShipperListFn();
      locationListFn();
    } else if (
      pathname === rejectedOrdersPath ||
      pathname === rejectedOrdersManfPath
    ) {
      ordersListFn("REJECTED");
      setOrderType("REJECTED");
    } else if (pathname === myOrdersPath || pathname === myOrdersManfPath) {
      myOrdersListFn();
      setOrderType("MYORDERS");
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
          <Nav.Link eventKey="MYORDERS" className="ps-2">
            My Orders
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="NEW">New Orders</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="ACCEPTED">Accepted Orders</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="REJECTED">Rejected Orders</Nav.Link>
        </Nav.Item>
      </Nav>
      {orderType === "NEW" && (
        <NewOrders
          data={newOrdersData}
          viewSingleOrderFn={viewSingleOrderFn}
          acceptOrderFn={acceptOrderFn}
          rejectOrderFn={rejectOrderFn}
          orderType="NEW"
        />
      )}
      {orderType === "ACCEPTED" && (
        <AcceptedOrders
          data={acceptedOrdersData}
          viewSingleOrderFn={viewSingleOrderFn}
          ordersListFn={ordersListFn}
          shipperList={shipperList}
          locationListData={locationListData}
          orderType="ACCEPTED"
        />
      )}
      {orderType === "REJECTED" && (
        <RejectedOrders
          data={rejectedOrdersData}
          viewSingleOrderFn={viewSingleOrderFn}
          orderType="REJECTED"
        />
      )}

      {orderType === "MYORDERS" && (
        <RejectedOrders
          data={myOrdersData}
          viewSingleOrderFn={viewSingleOrderFn}
          orderType="MYORDERS"
        />
      )}

      <PaginationWrapper
        totalRecords={totalRecords}
        pageLimit={10}
        pageNeighbours={2}
        onPageChanged={onPageChanged}
        skipRecords={skipRecords}
      />

      <ViewOrderModal
        show={modalShow}
        modaldetails={modalDetails}
        closeOrderModal={() => closeOrderModal()}
        orderType={orderType}
      />

      {isLoading && <Loader />}
    </>
  );
};

export default OrderDetails;
