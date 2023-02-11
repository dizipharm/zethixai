import http from "./httpService";
import { apiUrl } from "../config";
import { getCompanyID, getCompanyType } from "./AuthService";

export const newOrders = () => {
  const supplier = JSON.stringify({
    supplier: getCompanyID(),
    order_status: 0,
  });

  return http.get(apiUrl + `/order?query=${supplier}`);
};

export const viewSingleOrder = (purchaseOrderID: string) => {
  console.log("purchaseOrderID", purchaseOrderID);
  const purChaseOrder = JSON.stringify({
    purchase_order: purchaseOrderID,
  });
  return http.get(apiUrl + `/order?query=${purChaseOrder}`);
};

export const ordersList = (orderType: string, skipRecords?: number) => {
  let parameter;

  if (orderType === "NEW") {
    parameter = JSON.stringify({
      supplier: getCompanyID(),
      order_status: 0,
    });
  } else if (orderType === "ACCEPTED") {
    const supplier = JSON.stringify({
      supplier: getCompanyID(),
      order_status: 1,
    });

    const buyer = JSON.stringify({
      buyer: getCompanyID(),
      order_status: 1,
    });

    parameter = getCompanyType() === 0 ? supplier : buyer;
  } else if (orderType === "REJECTED") {
    const supplier = JSON.stringify({
      supplier: getCompanyID(),
      order_status: 4,
    });

    const buyer = JSON.stringify({
      buyer: getCompanyID(),
      order_status: 4,
    });

    parameter = getCompanyType() === 0 ? supplier : buyer;
  }
  let skip = skipRecords ? skipRecords : 0;
  return http.get(
    apiUrl +
      `/order?limit=10&skip=${skip}&aggregate=purchase_order&match=${parameter}&t=${Date.now()}`
  );
};

export const myOrdersList = (skipRecords?: number) => {
  let parameter = JSON.stringify({
    buyer: getCompanyID(),
  });
  let skip = skipRecords ? skipRecords : 0;
  return http.get(
    apiUrl +
      `/order?limit=10&skip=${skip}&aggregate=purchase_order&match=${parameter}&t=${Date.now()}`
  );
};

export const acceptOrder = (orderID: string) => {
  return http.put(apiUrl + `/order/${orderID}`, {
    order_status: 1,
  });
};

export const rejectOrder = (orderID: string) => {
  return http.put(apiUrl + `/order/${orderID}`, {
    order_status: 4,
  });
};

export const createShippment = (payload: any) => {
  return http.post(apiUrl + `/dispatch-it`, payload);
};

export const dispatchList = (skipRecords?: number) => {
  const parameter = JSON.stringify({
    supplier: getCompanyID(),
  });
  let skip = skipRecords ? skipRecords : 0;
  return http.get(
    apiUrl +
      `/dispatch?limit=10&skip=${skip}&aggregate=sscc_no&match=${parameter}&t=${Date.now()}`
  );
};

export const viewDispatchDetails = (ssccNo: string) => {
  return http.get(apiUrl + `/dispatch?query={"sscc_no":${ssccNo}}`);
};

export const viewShipperList = () => {
  return http.get(apiUrl + `/company-list?type=5`);
};

export const locationList = () => {
  let parameter = JSON.stringify({
    company: getCompanyID(),
  });
  return http.get(apiUrl + `/locations?query=${parameter}`);
};
