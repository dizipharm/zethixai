import http from "./httpService";
import { apiUrl } from "../config";
import { getCompanyAdminID } from "./AuthService";

export const tradingPartnersList = () => {
  const parameter = JSON.stringify({
    company_type: 0,
  });
  return http.get(apiUrl + `/company?query=${parameter}`);
};

export const tradingPartners = (orderType: string, skipRecords?: number) => {
  let partner;
  let status;

  if (orderType === "NEW") {
    partner = getCompanyAdminID();
    status = 0;
  } else if (orderType === "ACCEPTED") {
    partner = getCompanyAdminID();
    status = 1;
  } else if (orderType === "REJECTED") {
    partner = getCompanyAdminID();
    status = 2;
  }

  return http.get(
    apiUrl + `/my-distributors?parnter=${partner}&status=${status}`
  );
};

export const addPartner = (payload: any) => {
  return http.post(apiUrl + `/add-partner`, payload);
};

export const acceptPartner = (ID: string) => {
  return http.put(apiUrl + `/partner/${ID}`, {
    status: 1,
  });
};

export const rejectPartner = (ID: string) => {
  return http.put(apiUrl + `/partner/${ID}`, {
    status: 2,
  });
};
