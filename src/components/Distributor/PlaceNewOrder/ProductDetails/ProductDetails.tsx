import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faBuilding,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import "./ProductDetails.styles.scss";
import { getSingleProduct } from "../../../../services/productService";
import Loader from "../../../../common/Loder";
import { useHistory, useLocation, useParams } from "react-router-dom";

interface Props {
  data: object;
}

export type data = {
  brand_name: string;
  price: number;
  dosage_form: string;
};

const ProductDetails = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setSingleProduct] = useState({} as data);

  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const handleBackProductList = () => {
    history.push("/distributor/product-lsit");
  };

  const getSingleProductData = () => {
    setIsLoading(true);

    getSingleProduct(id)
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  return (
    <>
      <h1 className="page-title big">Product Information</h1>
      <div className="row product-details">
        <div className="col-md-5 product-details-left">
          <img src="https://cdn-icons-png.flaticon.com/128/656/656019.png" />
        </div>
        <div className="col-md-7 product-details-right">
          <h1 className="font-200">{data.brand_name}</h1>
          <div>
            <p>Product Description : -</p>
            <p>
              <FontAwesomeIcon icon={faTag} /> Unit Price:
              <strong> {data.price && data.price.toFixed(2)} USD</strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faBuilding} /> Company Name:
              <strong></strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faProductHunt} /> Dosage Form:
              <strong> {data.dosage_form} </strong>
            </p>
          </div>

          <div className="row mt-5 text-end me-5">
            <span className="back-to-list" onClick={handleBackProductList}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} /> Back to Product List
            </span>
          </div>
        </div>
      </div>

      {isLoading && <Loader />}
    </>
  );
};

export default ProductDetails;
