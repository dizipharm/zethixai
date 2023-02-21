import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import cartEmptyImg from "../../../../assets/images/cart-empty.png";

import {
  cartDetails,
  deleteCart,
  updateCart,
} from "../../../../services/cartService";
import Loader from "../../../../common/Loder";

import "./AddToCart.styles.scss";
import { Link } from "react-router-dom";

interface DataProps {
  brand_name: string;
  price: number;
  dosage_form: string;
}

interface Props {
  data: DataProps[];
}

const AddToCart = (props: Props) => {
  const [cartData, setCartData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateCartFn = (cartId: string, qty: number) => {
    setIsLoading(true);
    updateCart(cartId, qty)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const changeQuantity = (selectedValue: any, value: any) => {
    const cartValues: any = [...cartData];
    const index = cartValues.indexOf(value);
    cartValues[index] = { ...value };
    cartValues[index].qty = Number(selectedValue.target.value);
    updateCartFn(cartValues[index].cart_id, Number(selectedValue.target.value));
    setCartData(cartValues);
  };

  const removeCart = (cartId: string) => {
    setIsLoading(true);
    deleteCart(cartId)
      .then((res) => {
        setIsLoading(false);
        cartDetailsData();
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const cartDetailsData = () => {
    setIsLoading(true);
    cartDetails()
      .then((res) => {
        const cartData: any = [];

        res &&
          res.data.map((d: any) => {
            return cartData.push({
              cart_id: d._id,
              product_id: d.product._id,
              material_name: d.product.material_name,
              qty: d.qty,
              price: d.product.price,
            });
          });

        setCartData(cartData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    cartDetailsData();
  }, []);

  return (
    <>
      <h1 className="page-title big">Add To Cart</h1>
      <div className="row">
        <Table>
          <tbody>
            {cartData && cartData.length > 0 ? (
              cartData.map((cd, i) => {
                return (
                  <tr className="cart-row" key={i}>
                    <td className="delete-cart">
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() => removeCart(cd.cart_id)}
                      />
                    </td>
                    {/* <td className="cart-img">
                      <img src="https://cdn-icons-png.flaticon.com/128/656/656019.png" />
                    </td> */}

                    <td className="cart-product-name">{cd.material_name}</td>
                    <td className="cart-quantity">
                      <select
                        value={cd.qty}
                        onChange={(e: any) => changeQuantity(e, cd)}
                        className="form-select cart-quantity-select"
                      >
                        <option value="100">100</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                      </select>
                    </td>
                    <td className="cart-price">
                      {(cd.price && cd.price * cd.qty).toFixed(2)} GBP
                    </td>
                  </tr>
                );
              })
            ) : (
              <div className="empty-data">
                <img src={cartEmptyImg} />
                <p>Your cart is empty </p>
              </div>
            )}
          </tbody>
        </Table>
      </div>
      {cartData && cartData.length > 0 && (
        <Link to="/distributor/place-order">
          <button className="btn secondary-btn float-end">Continue</button>
        </Link>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default AddToCart;
