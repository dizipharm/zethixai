import http from "./httpService";
import { apiUrl } from "../config";
import { getCompanyID } from "./AuthService";

export const addLocation = (payload: any) => {
  return http.post(apiUrl + `/locations`, payload);
};

export const locationList = (skipRecords?: number) => {
  let parameter = JSON.stringify({
    company: getCompanyID(),
  });
  let skip = skipRecords ? skipRecords : 0;
  return http.get(
    apiUrl +
      `/locations?limit=10&skip=${skip}&query=${parameter}&t=${Date.now()}`
  );
};
