import http from "./httpService";
import { apiUrl } from "../config";
const djangoApiUrl = 'http://api2.tracepharm.io:8000'

export const getProductList = () => {
  return http.get('http://api2.tracepharm.io:8000/carbon/');
};

export const getMaterialsList = () => {
  return http.get('http://api2.tracepharm.io:8000/carbon_table/');
};

export const getElementGroupList = () => {
  return http.get('http://api2.tracepharm.io:8000/element/');
};

export const getStructuralList = () => {
  return http.get('http://api2.tracepharm.io:8000/structural/');
};

export const getCarbonImprintData = () => {
  return http.get('http://api2.tracepharm.io:8000/carbon');
};

export const postSelectedSpecsData = (data:any) => {
  return http.post('http://api2.tracepharm.io:8000/carbon_input/', data);
};