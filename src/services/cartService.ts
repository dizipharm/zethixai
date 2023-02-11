import http from "./httpService";
import { apiUrl } from "../config";
import { getUserID } from "./AuthService";

export const addToCart = (payload: any) => {
  return http.post(apiUrl + "/cart", payload);
};

export const cartCount = () => {
  return http.get(
    apiUrl +
      `/cart/count?query=${JSON.stringify({
        user: getUserID(),
      })}&t=${Date.now()}`
  );
};

export const updateCart = (cartId: string, qtyValue: number) => {
  return http.put(apiUrl + `/cart/${cartId}`, { qty: qtyValue });
};

export const deleteCart = (cartId: string) => {
  return http.delete(apiUrl + `/cart/${cartId}`);
};

export const cartDetails = () => {
  return http.get(
    apiUrl +
      `/cart?query=${JSON.stringify({
        user: getUserID(),
      })}&populate=product&t=${Date.now()}`
  );
};

export const placeOrder = (payload: any) => {
  return http.post(apiUrl + "/order", payload);
};
