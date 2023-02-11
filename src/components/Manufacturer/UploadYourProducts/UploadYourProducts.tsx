import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import AddedProducts from "./AddedProducts";
import AddNewProduct from "./AddNewProduct";
import UploadBulkProducts from "./UploadBulkProducts";
import { getManfProductList } from "../../../services/productService";
import PaginationWrapper from "../../../common/Pagination/Pagination";
import Loader from "../../../common/Loder";

const UploadYourProducts = () => {
  const [addType, setAddType] = useState("ADDNEW");
  const [isLoading, setIsLoading] = useState(false);
  const [manfProductList, setManfProductList] = useState<any[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [skipRecords, setSkipRecords] = useState(0);

  const history = useHistory();
  const { pathname } = useLocation();

  const newProuctPath = "/manufacturer/add-new-product";
  const addedProductsPath = "/manufacturer/added-product-list";
  const uploadBulkProductsPath = "/manufacturer/upload-bulk-products";

  const newProuctPathFn = () => {
    history.push(newProuctPath);
  };

  const addedProductsPathFn = () => {
    history.push(addedProductsPath);
  };

  const uploadBulkProductsPathFn = () => {
    history.push(uploadBulkProductsPath);
  };

  const getManfProductListFn = (skipRecords?: number) => {
    setIsLoading(true);
    getManfProductList(skipRecords)
      .then((res) => {
        let totalProducts = res.headers["x-total-count"];
        totalProducts && Number(totalProducts);
        setTotalProducts(Number(totalProducts));
        setManfProductList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleSelect = (type: any) => {
    setAddType(type);
    if (type === "ADDNEW") {
      newProuctPathFn();
      setSkipRecords(0);
      setManfProductList([]);
    } else if (type === "ADDED") {
      addedProductsPathFn();
      setSkipRecords(0);
    } else if (type === "UPLOADBULK") {
      uploadBulkProductsPathFn();
    }
  };

  const onPageChanged = (currentPage: any) => {
    let currentPageValue = currentPage - 1;
    let skipRecords = Number("" + currentPageValue + 0);
    getManfProductListFn(skipRecords);
  };

  useEffect(() => {
    console.log("enter===", pathname);
    if (pathname === newProuctPath) {
      setAddType("ADDNEW");
      setManfProductList([]);
    } else if (pathname === addedProductsPath) {
      setAddType("ADDED");
      getManfProductListFn();
    }
  }, [pathname]);

  return (
    <>
      <Nav
        variant="pills"
        className="order-nav mb-3"
        activeKey={addType}
        onSelect={(eventKey: any) => handleSelect(eventKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="ADDNEW" className="ps-2">
            Add New Product
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="ADDED">Added Products</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="UPLOADBULK">Upload Bulk Products</Nav.Link>
        </Nav.Item>
      </Nav>

      <hr className="row-divider" style={{ marginTop: "-10px" }} />

      {addType === "ADDNEW" && <AddNewProduct />}

      {addType === "ADDED" && (
        <>
          <AddedProducts data={manfProductList} />
          <PaginationWrapper
            totalRecords={totalProducts}
            pageLimit={10}
            pageNeighbours={2}
            onPageChanged={onPageChanged}
          />
        </>
      )}

      {addType === "UPLOADBULK" && <UploadBulkProducts />}

      {isLoading && <Loader />}
    </>
  );
};

export default UploadYourProducts;
