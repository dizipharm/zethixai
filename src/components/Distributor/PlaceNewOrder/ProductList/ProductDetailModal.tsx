import * as React from "react";
import { Modal } from "react-bootstrap";

const ProductDetailModal = (props: any) => {
  const data = props.modaldetails;
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="product-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          More FDA Information of the Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <b>Labler Name:</b>
          <span>{data.labeler_name}</span>
        </p>
        {/* <p>
            <b>Last Updated Date/Time:</b>
            <span>Wed, 15 Sep 2021 00:00:00 GMT</span>
          </p> */}
        <p>
          <b>Mfg Name:</b>
          {/* <span>{data.openfda.manufacturer_name[0]}</span> */}
        </p>
        <p>
          <b>Ingredients Name:</b>
          <span>
            {/* {data &&
                data.active_ingredients.length > 0 &&
                data.active_ingredients.map((d: any) => {
                  return d.name;
                })} */}
          </span>
        </p>
        <p>
          <b>Generic Name:</b>
          <span>{data.generic_name}</span>
        </p>
        <p>
          <b>Brand Name:</b>
          <span>{data.brand_name}</span>
        </p>
        <p>
          <b>Product NDC:</b>
          <span>{data.product_ndc}</span>
        </p>
        <p>
          <b>Listing Expiration Date:</b>
          <span>{data.listing_expiration_date}</span>
        </p>
        <p>
          <b>Ingredients:</b>
          {/* <span>None</span> */}
        </p>
        <p>
          <b>Application Number:</b>
          {/* <span>None</span> */}
        </p>
        <p>
          <b>GTIN:</b>
          {/* <span>5012712009947</span> */}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ProductDetailModal;
