import { useEffect, useState, createContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faBarcode } from "@fortawesome/free-solid-svg-icons";

import Loader from "../../../../common/Loder";
import { getUserID } from "../../../../services/AuthService";
import ProductDetailModal from "./ProductDetailModal";
import {
  getProductList,
  searchProduct,
} from "../../../../services/productService";
import { addToCart, cartCount } from "../../../../services/cartService";
import PaginationWrapper from "../../../../common/Pagination/Pagination";
import { SoryByAlphabet } from "../../../../constants/constants";

import "./ProductList.styles.scss";
import { useUpdateCount } from "../../../../context/cartContext";
import ButtonComponent from "../../../../react-components/Button/Button";
import PageTitle from "../../../../react-components/PageTitle/PageTitle";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalDetails, setModalDetails] = useState({});
  const [productList, setProductList] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [sortLetter, setSortLetter] = useState("");
  const [selectSearchValue, setSelectSearchValue] = useState("");
  const [inputSearchValue, setInputSearchValue] = useState("");
  const [clearPagination, setClearPagination] = useState(false);

  const updateCount = useUpdateCount();

  const closeProductModal = () => {
    setModalShow(false);
  };

  const openProductModal = (item: any) => {
    setModalShow(true);
    setModalDetails(item);
  };

  const cartCountData = () => {
    cartCount()
      .then((res) => {
        updateCount(res.data.count);
        sessionStorage.setItem("cartCount", res.data.count);
      })
      .catch((err) => {});
  };

  /**
   * API - Get products list
   * Parameters -> skip
   * Default skip records is 0
   * When do the pagination adding +10 records to skip
   */
  const getProductListData = async (skipRecords: number) => {
    setIsLoading(true);
    getProductList(skipRecords)
      .then((res) => {
        let totalProducts = res.headers["x-total-count"];
        totalProducts && Number(totalProducts);
        setTotalProducts(Number(totalProducts));
        setProductList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  /**
   * API - Add to cart
   * Parametes -> Quantiry, User ID (From login user), Product ID
   * Adding the selected product to cart by clicking on Add To Cart button in products
   */
  const handleAddToCart = async (item: any) => {
    const payload = {
      qty: 100,
      user: getUserID(),
      product: item._id,
    };

    setIsLoading(true);

    addToCart(payload)
      .then((res) => {
        cartCountData();
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  /**
   * API - Filtering products by letter
   * Parametes -> letter
   */
  const searchProductFn = (
    value: string,
    skipRecords?: number,
    searchValue?: string
  ) => {
    setSortLetter(value);
    setIsLoading(true);
    setClearPagination(true);
    searchProduct(value, skipRecords, searchValue)
      .then((res) => {
        let totalProducts = res.headers["x-total-count"];
        totalProducts && Number(totalProducts);
        setTotalProducts(Number(totalProducts));
        setProductList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const clearSort = () => {
    getProductListData(0);
    setSortLetter("");
  };

  const onPageChanged = (currentPage: any) => {
    let currentPageValue = currentPage - 1;
    let skipRecords = Number("" + currentPageValue + 0);
    if (sortLetter) {
      searchProductFn(sortLetter, skipRecords, "sortByLetter");
    } else {
      getProductListData(skipRecords);
    }
  };

  const handleSearchValue = (e: any, type: string) => {
    if (type === "select") setSelectSearchValue(e.target.value);
    else if (type === "input") setInputSearchValue(e.target.value);
  };

  const handleSearch = () => {
    searchProductFn(inputSearchValue, 0, selectSearchValue);
  };

  useEffect(() => {
    getProductListData(0);
    setSelectSearchValue("brand_name");
  }, []);

  return (
    <>
      <PageTitle title="Product List" />
      <div className="row product-search">
        <div className="col-md-4 p-0">
          <select
            className="form-select form-select form-select-sm"
            aria-label="Default select example"
            onChange={(e) => handleSearchValue(e, "select")}
          >
            <option value="brand_name">By Brand Name (Drug Name)</option>
            <option value="labeler_name">By Labeler Name (Manufacturer)</option>
          </select>
        </div>

        <div className="col-md-4">
          <input
            className="form-control form-control-sm"
            placeholder="Search"
            onChange={(e) => handleSearchValue(e, "input")}
          />
        </div>

        <div className="col-md-2 ps-0">
          <button
            type="button"
            className="btn secondary-btn"
            onClick={handleSearch}
          >
            Search <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </div>

      <div className="sory-by-alphabet">
        <label>Sort By |</label>
        {SoryByAlphabet.map((value: string, index: number) => {
          return (
            <>
              <span
                className={`${sortLetter === value && "active-sort"}  letter `}
                onClick={() => searchProductFn(value, 0, "sortByLetter")}
                key={index}
              >
                {value}{" "}
              </span>{" "}
              <span className="pipe">|</span>
            </>
          );
        })}
        <span className="clear-sort" onClick={clearSort}>
          &nbsp; Clear
        </span>
      </div>

      <hr className="row-divider" />

      {productList && productList.length > 0 ? (
        productList.map((item: any) => {
          return (
            <div className="row mt-3" key={item.product_ndc}>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="product-img-div">
                    {/* <FontAwesomeIcon icon={faPills} /> */}
                    <img src="https://cdn-icons-png.flaticon.com/128/656/656019.png" />
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
                      <label>Labeler Name:</label>
                      <span>{item.labeler_name} </span>
                    </div>
                    <div>
                      <label>Product NDC:</label>{" "}
                      <span>{item.product_ndc}</span>
                    </div>
                    <div>
                      <label>Unit Price:</label>{" "}
                      <span> {item.price && item.price.toFixed(2)} USD</span>
                    </div>

                    <div>
                      <label>Dosage:</label> <span> {item.dosage_form}</span>
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

                <div className="product-btns">
                  <Link to={`/distributor/product-details/${item._id}`}>
                    <button type="button" className="btn btn-sm info-btn">
                      Info &nbsp; <FontAwesomeIcon icon={faCircleInfo} />
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-sm details-btn"
                    onClick={() => openProductModal(item)}
                  >
                    Details &nbsp; <FontAwesomeIcon icon={faBarcode} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
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

      <PaginationWrapper
        totalRecords={totalProducts}
        pageLimit={10}
        pageNeighbours={2}
        onPageChanged={onPageChanged}
        clearPagination={clearPagination}
      />

      <ProductDetailModal
        show={modalShow}
        modaldetails={modalDetails}
        onClick={() => closeProductModal()}
      />

      {isLoading && <Loader />}
    </>
  );
};

export default ProductList;
