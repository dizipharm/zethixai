import http from "./httpService";
import { apiAuthUrl } from "../config";

export const signIn = (payload: any) => {
  return http.post(apiAuthUrl + "/signin", payload);
};

export const signUp = (payload: any) => {
  return http.post(apiAuthUrl + "/signUp", payload);
};

export const forgotPassword = (email: any) => {
  return http.post(apiAuthUrl + "/forgot", { email });
};

export const changePassword = (payload: any) => {
  return http.post(apiAuthUrl + "/reset-password", payload);
};

export const setUserData = (data: any) => {
  sessionStorage.setItem("data", JSON.stringify(data));
};

export const getUserData = () => {
  const data = sessionStorage.getItem("data");
  const userData = data && JSON.parse(data);

  return userData && JSON.parse(JSON.stringify(userData));
};

export const getUserID = () => {
  const userData = getUserData();
  return userData?._id;
};

export const getUserName = () => {
  const userData = getUserData();
  const userName = userData?.first_name + " " + userData?.last_name;
  return capitalize(userName);
};

export const getUserEmail = () => {
  const userData = getUserData();
  const email = userData?.email;
  return email;
};

export const getCompanyType = () => {
  const userData = getUserData();
  const companyType = userData?.company?.company_type;
  return companyType;
};

export const getCompanyID = () => {
  const userData = getUserData();
  const companyID = userData?.company?._id;
  return companyID;
};

export const getCompanyName = () => {
  const userData = getUserData();
  const companyName = userData?.company?.company_name;
  return companyName;
};

export const getCompanyAdminID = () => {
  const userData = getUserData();
  const companyAdminID = userData?.company?.admin;
  return companyAdminID;
};

export const setToken = (token: string) => {
  sessionStorage.setItem("token", token.toString());
};

export const getAuthToken = () => {
  return sessionStorage.getItem("token");
};

export const isLogin = () => {
  if (sessionStorage.getItem("token")) {
    return true;
  }
  return false;
};

export const capitalize = (input: any) => {
  return input
    .toLowerCase()
    .split(" ")
    .map((s: any) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};
