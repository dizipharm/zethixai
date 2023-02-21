import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ViewOrderModal from "../OrderDetails/ViewOrderModal";
import { getCompanyType } from "../../services/AuthService";
import { dispatchList, viewDispatchDetails } from "../../services/orderService";
import Loader from "../../common/Loder";
import ShippedOrderModal from "./ShippedOrderModal";
import PaginationWrapper from "../../common/Pagination/Pagination";

interface Props {
  shippedOrdersData: Array<any>;
}

const ShippedOrders = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const [shippedOrdersData, setShippedOrdersData] = useState<any[]>([]);
  const companyType = getCompanyType();
  const [totalRecords, setTotalRecords] = useState(0);

  const dispatchFn = (skipRecords?: number) => {
    setIsLoading(true);
    dispatchList(skipRecords)
      .then((res) => {
        const resData = res.data;
        let totalProducts = res.headers["x-total-count"];
        totalProducts && Number(totalProducts);
        setTotalRecords(Number(totalProducts));
        setShippedOrdersData(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const viewDispachOrderDetailsFn = (ssccNo: string) => {
    setIsLoading(true);
    viewDispatchDetails(ssccNo)
      .then((res) => {
        const resData = res.data;
        setModalShow(true);
        setModalDetails(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const closeOrderModal = () => {
    setModalShow(false);
  };

  const onPageChanged = (currentPage: any) => {
    let currentPageValue = currentPage - 1;
    let skipRecords = Number("" + currentPageValue + 0);

    dispatchFn(skipRecords);
  };

  useEffect(() => {
    dispatchFn();
  }, []);

  return (
    <>
      <h1 className="page-title big">
        {companyType === 0 ? "Shipped Orders" : "Orders In Transit"}
      </h1>
      <Table className="order-table">
        <thead>
          <tr className="order-thead-tr">
            <th>Date of Shippment</th>
            <th>SSCC No</th>
            <th>
              Reference <br /> Number
            </th>
            <th>Total Items</th>

            <th>Order Placed By</th>
            <th>Delivery address</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>
          {shippedOrdersData?.length > 0 ? (
            shippedOrdersData.map((d, i) => {
              return (
                <tr className="" key={i}>
                  <td className="order-date">
                    {moment(d.shipped_date).format("21/02/2023")}
                  </td>
                  <td className="order-total"> {d.sscc_no} </td>
                  <td className="order-id">{d.purchase_order}</td>
                  <td className="">{d.total_trade_units}</td>
                  <td>
                    {d.contact_name} <br /> {d.contact_email} <br />{" "}
                    {d.contact_number}
                  </td>
                  <td className="order-address">{d.destination_address}</td>
                  <td className="orders-btn accept">
                    <button
                      className="btn btn-sm btn-info me-1"
                      onClick={() => viewDispachOrderDetailsFn(d.sscc_no)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr className="order-empty-data">
              <td colSpan={6} className="text-center">
                No Records Available{" "}
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <PaginationWrapper
        totalRecords={totalRecords}
        pageLimit={10}
        pageNeighbours={2}
        onPageChanged={onPageChanged}
      />

      <ShippedOrderModal
        show={modalShow}
        modaldetails={modalDetails}
        closeOrderModal={() => closeOrderModal()}
      />

      {isLoading && <Loader />}
    </>
  );
};

export default ShippedOrders;
