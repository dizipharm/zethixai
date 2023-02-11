import http from "./httpService";
import { apiUrl } from "../config";
import { getCompanyID } from "./AuthService";

export const getProductList = (skipRecords: number) => {
  return http.get(
    apiUrl + `/product?limit=10&skip=${skipRecords}&t=${Date.now()}`
  );
};

export const getSingleProduct = (productId: any) => {
  return http.get(apiUrl + `/product/${productId}`);
};

export const searchProduct = (
  value: string,
  skipRecords?: number,
  searchValue?: string
) => {
  let skip = skipRecords ? skipRecords : 0;
  let path;
  if (searchValue === "brand_name" || searchValue === "sortByLetter") {
    path = `/product?skip=${skip}&query={"brand_name":{"$regex":"^(${value})"}}`;
  } else {
    path = `/product?query={"openfda.manufacturer_name":{"$regex":"^(${value})"}}`;
  }
  return http.get(apiUrl + path);
};

export const addProduct = (payload: any) => {
  return http.post(apiUrl + `/product`, payload);
};

export const getManfProductList = (skipRecords?: number) => {
  let parameter = JSON.stringify({
    company: getCompanyID(),
  });
  let skip = skipRecords ? skipRecords : 0;
  return http.get(
    apiUrl + `/product?limit=10&skip=${skip}&query=${parameter}&t=${Date.now()}`
  );
};
