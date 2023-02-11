import React from "react";
import { Card } from "react-bootstrap";

const ProductList = ({ data, selectBy }: any) => {
  return (
    <>
      <Card className="my-4">
        <Card.Body>
          <Card.Title>
            <h1 className="page-title big">Product List</h1>
          </Card.Title>
          <Card.Text>
            {data?.length > 0 &&
              data?.map((d: any, i: number) => {
                return (
                  <div className="product-details" key={i}>
                    <div className="d-flex justify-content-between">
                      <div className="p-name">
                        {d?.labeler_name || d?.line_item?.generic_name}
                      </div>
                      <div>
                        Quantity:
                        <span className="p-quantity">{d?.line_item_qty}</span>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="label">Product NDC:</div>
                      &nbsp;
                      <div className="text">{d?.product_ndc}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="label">SSCCN: {d?.sscc_no}</div>
                      <div className="label">
                        GTIN: {d?.line_item?.gtin || d?.gtin}
                      </div>
                    </div>
                  </div>
                );
              })}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductList;
