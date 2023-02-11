import http from "./httpService";
import { apiUrl } from "../config";

export const trackBySSCC = (ssccn: string) => {
  return http.get(apiUrl + `/track-it?sscc_no=${ssccn}`);
};

export const traceBySSCC = (ssccn: string) => {
  return http.get(apiUrl + `/trace-it-sscn?sscc_no=${ssccn}`);
};

export const ssccnList = () => {
  return http.get(apiUrl + `/dispatch?distinct=sscc_no`);
};

export const gtinList = () => {
  return http.get(apiUrl + `/product?distinct=gtin`);
};

export const lotList = (gtin: string) => {
  return http.get(apiUrl + `/batch-codes?gtin=${gtin}`);
};

export const packageSnList = (gtin: string, lot: string) => {
  return http.get(apiUrl + `/package-sn?gtin=${gtin}&batch=${lot}`);
};

export const traceByGtin = (gtin: string, lot: string, packageSn: string) => {
  return http.get(
    apiUrl + `/trace-it?gtin=${gtin}&lot_no=${lot}&package_sn=${packageSn}`
  );
};

export const gtnActiveCount = () => {
  return http.get(apiUrl + `/product/count?query={"is_active":"true"}`);
};

export const gtnInActiveCount = () => {
  return http.get(apiUrl + `/product/count?query={"is_active":"false"}`);
};

export const lotCount = (gtin: string) => {
  let parameter = JSON.stringify({
    product: gtin,
  });
  return http.get(apiUrl + ` /batch/count?query=${parameter}`);
};

export const unitCount = (gtin: string) => {
  let parameter = JSON.stringify({
    batch: gtin,
  });
  return http.get(
    apiUrl + ` /inventory/count?query={"batch":"625d6b07a7662a9fe5208c9b"}`
  );
};
