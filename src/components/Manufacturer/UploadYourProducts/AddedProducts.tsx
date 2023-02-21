import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faBarcode } from "@fortawesome/free-solid-svg-icons";

const AddedProducts = ({ data }: any) => {
  return (
    <>
      {data && data.length > 0 ? (
        data.map((item: any, i: number) => {
          return (
            <div className="row mt-3" key={i}>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="product-img-div">
                    {/* <FontAwesomeIcon icon={faPills} /> */}
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/656/656019.png" /> */}
                  </div>
                  <div className="product-info">
                    <div>
                      <label>Brand Name:</label>
                      <span>{item.brand_name}</span>
                    </div>
                    <div>
                      <label>Generic Name:</label>
                      <span>{item.generic_name} </span>
                    </div>
                    <div>
                      <label>Builder Name:</label>
                      <span>{item.labeler_name} </span>
                    </div>
                    <div>
                      <label>Product NDC:</label>{" "}
                      <span>{item.product_ndc}</span>
                    </div>
                    <div>
                      <label>Unit Price:</label>{" "}
                      <span> {item.price && item.price.toFixed(2)} GBP</span>
                    </div>

                    <div>
                      <label>Unit details:</label> <span> {item.dosage_form}</span>
                    </div>
                    <div className="d-flex">
                      <label>Package Details :</label>
                      <span className="pkg-details">
                        {item &&
                          item.packaging &&
                          item.packaging.length > 0 &&
                          item.packaging.map((pkg: any, index: number) => {
                            return <span key={index}>{pkg.description}</span>;
                          })}
                      </span>
                    </div>
                    <div>
                      <label>Shipping Time:</label> <span> 21days</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="row-divider"></hr>
            </div>
          );
        })
      ) : (
        <div className="empty-data">
          <img src="https://cdn-icons.flaticon.com/png/512/551/premium/551237.png?token=exp=1647507816~hmac=edd125975e54c807317198bbca25c712" />
          <p>No products available</p>
        </div>
      )}
    </>
  );
};

export default AddedProducts;
