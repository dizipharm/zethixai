import React from "react";
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBullhorn,
  faBorderAll,
  faCartShopping,
  faAlignJustify,
  faAngleDown,
  faShippingFast,
  faBarcode,
  faUsers,
  faBriefcase,
  faAngleUp,
  faMoneyBillWave,
  faUpload,
  faAirFreshener,
  faDollar,
  faPoundSign,
  faAdd,
  faMinimize,
  fa7,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser, faHandshake } from "@fortawesome/free-regular-svg-icons";
// @ts-ignore
import "./Sidebar.styles.scss";
import { getUserData } from "../../services/AuthService";
import { faAccusoft } from "@fortawesome/free-brands-svg-icons";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const userData = getUserData();
  const companyType = userData && userData.company.company_type;
  const location = useLocation().pathname;
  const history = useHistory();

  return (
    <aside className="sidebar">
      <div className="sidebar-div">
        {companyType === 0 ? (
          <ManufacturerMenus location={location} history={history} />
        ) : companyType === 1 ? (
          <DistributorMenus location={location} history={history} />
        ) : <RetailerMenus location={location} history={history}/>}
      </div>
    </aside>
  );
};

export default Sidebar;

const ManufacturerMenus = ({ location, history }: any) => {
  const ordersActive =
    location === "/manufacturer/order-management" ||
    location === "/manufacturer/order-management/accepted-orders" ||
    location === "/manufacturer/order-management/rejected-orders" ||
    location === "/manufacturer/order-management/new-orders";

  const homeActive = location === "/manufacturer/dashboard";

  const uploadActive =
    location === "/manufacturer/added-product-list" ||
    location === "/manufacturer/add-new-product";

  const TradePartActive =
    location === "/manufacturer/trading-partners/new" ||
    location === "/manufacturer/trading-partners/accepted" ||
    location === "/manufacturer/trading-partners/rejected";

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link
          to={"/manufacturer/dashboard"}
          className={`${homeActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to={"#"}
          className={`${TradePartActive && "active"} nav-link`}
          data-bs-toggle="collapse"
          data-bs-target="#Mytradingpartners"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faHandshake} /> Trading Partners
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="Mytradingpartners">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                to={"/manufacturer/trading-partners/new"}
                className="link-dark"
              >
                New Partner Request
              </Link>
            </li>
            <li>
              <Link
                to={"/manufacturer/trading-partners/accepted"}
                className="link-dark"
              >
                Accepted Partners
              </Link>
            </li>
            <li>
              <Link
                to={"/manufacturer/trading-partners/rejected"}
                className="link-dark"
              >
                Rejected Partners
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link
          to={"#"}
          className="nav-link"
          data-bs-toggle="collapse"
          data-bs-target="#alert-collapse"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faBullhorn} /> Quotations
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="alert-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link to={"#"} className="link-dark">
                FDA
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Returns
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Diversion
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Expiry
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link
          to="/manufacturer/orders-in-transit"
          className={`${
            location === "/manufacturer/orders-in-transit" && "active"
          } nav-link`}
        >
          <FontAwesomeIcon icon={faShippingFast} /> Shipped Orders
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to={"#"}
          data-bs-toggle="collapse"
          data-bs-target="#orders-collapse"
          aria-expanded="true"
          className={`${ordersActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faAlignJustify} /> Order Management
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                to={"/manufacturer/order-management/my-orders"}
                className="link-dark"
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/manufacturer/order-management/new-orders"}
                className="link-dark"
              >
                New Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/manufacturer/order-management/accepted-orders"}
                className="link-dark"
              >
                Accepted Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/manufacturer/order-management/rejected-orders"}
                className="link-dark"
              >
                Rejected Orders
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link
          to={"#"}
          className="nav-link"
          data-bs-toggle="collapse"
          data-bs-target="#datascan"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faBarcode} /> Inventory
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="datascan">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link to={"#"} className="link-dark">
                Factory (Uxbridge-UK)
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Factory (Hartford-USA)
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Factory (Hyderabad-India)
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Warehouse (Hartford-USA)
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Warehouse (Uxbridge-UK)
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link
          to={"#"}
          className="nav-link"
          data-bs-toggle="collapse"
          data-bs-target="#dataupload"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faAngleUp} /> Pricing
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="dataupload">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link to={"#"} className="link-dark">
                Upload FDA-NDC Data
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Upload EUFMD Data
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Upload Any Other (To be approved)
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link
          to={"/manufacturer/add-new-product"}
          className={`${uploadActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faUpload} /> Update Materials
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"#"}
          className="nav-link"
          data-bs-toggle="collapse"
          data-bs-target="#businesstransactions"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faBriefcase} />
          Business Transactions
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="businesstransactions">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link to={"#"} className="link-dark">
                Transaction Statement
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Transaction History
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link
          to={"#"}
          className="nav-link"
          data-bs-toggle="collapse"
          data-bs-target="#users"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faUsers} />
          Users
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="users">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link to={"#"} className="link-dark">
                Add User
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                Manage User
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

const DistributorMenus = ({ location, history }: any) => {
  const placeOrderActive =
    location === "/distributor/product-lsit" ||
    location === "/distributor/add-to-cart" ||
    location === "/distributor/place-order";
  const inTransitActive = location === "/distributor/orders-in-transit";
  const ordersActive =
    location === "/distributor/order-management" ||
    location === "/distributor/order-management/accepted-orders" ||
    location === "/distributor/order-management/rejected-orders";
    
  const homeActive = location === "/distributor/dashboard";
  const carbonActive = location === "/distributor/carboncalculations"
  const materialActive = location === "/distributor/materialspecifications"
  const OrderSummaryActive = location ==="/distributor/ordersummary"
  const QuotationsActive = location ==="/distributor/quotations"
  const paymentsActive = location ==="/distributor/payments"
  const carboncalculations = location === "/distributor/carbonoffset"
  const XActive = location === "/distributor/x"
  const YActive = location === "/distributor/y"
  const ZActive = location === "/distributor/z"



  const handleTradingPartner = (value: string) => {
    history.push({
      pathname: "/distributor/my-trading-partners",
      state: { value: value },
    });
  };

  return (
    <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
        <Link
          to="/distributor/dashboard"
          className={`${homeActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"/distributor/x"}
          className={`${XActive && "active"} nav-link`}

        >
          <FontAwesomeIcon icon={faMinimize} /> ESG Exec Dashbord 
        </Link>
        </li>
        <li className="nav-item">
        <Link
          to={"/distributor/y"}
          className={`${YActive && "active"} nav-link`}

        >
          <FontAwesomeIcon icon={faAdd} /> ESG Analytics
        </Link>
        </li>

      <li className="nav-item">
        <Link
          to={"/distributor/z"}
          className={`${ZActive && "active"} nav-link`}

        >
          <FontAwesomeIcon icon={faAccusoft} /> ESG Evidence Assets 
        </Link>
      
      </li>

      {/* <li className="nav-item">
        <Link
          to={"/distributor/ordersummary"}
          className={`${OrderSummaryActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faBarcode} /> OrderSummary
        </Link>
      </li> */}
      
      <li className="nav-item">
        <Link
          to={"#"}
          className="nav-link"
          data-bs-toggle="collapse"
          data-bs-target="#Mytradingpartners"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faHandshake} /> My Building Partners
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="Mytradingpartners">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li onClick={() => handleTradingPartner("TracePharm")}>
              <Link to={"#"} className="link-dark">
                Ministry of Justice
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <Link
          to="/distributor/carbonoffset"
          className={`${
            location === "/distributor/carbonoffset" && "active"
          } nav-link`}
        >
          <FontAwesomeIcon icon={faAirFreshener} /> Carbon Offsetting
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"/distributor/quotations"}
          className={`${QuotationsActive && "active"} nav-link`}

        >
          <FontAwesomeIcon icon={faBullhorn} /> Quotations 
        </Link>
        
      </li>


      <li className="nav-item">
        <Link
          to="/distributor/materialspecifications"
          className={`${materialActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faBorderAll} /> Material Specification
        </Link>
      </li>
      
      <li className="nav-item">
        <Link
          to="/distributor/carboncalculations"
          className={`${carbonActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faShippingFast} /> Carbon Calculations
        </Link>
      </li>
            
      <li className="nav-item">
        <Link
          to="/distributor/payments"
          className={`${
            paymentsActive  && "active"
          } nav-link`}
        >
          <FontAwesomeIcon icon={faMoneyBillWave} /> Payments
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/distributor/product-lsit"
          className={`${placeOrderActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faBorderAll} /> Place New Order
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="#"
          className={`${
            location === "/manufacturer/shOrders" && "active"
          } nav-link`}
        >
          <FontAwesomeIcon icon={faMoneyBillWave} /> Project Management
        </Link>
      </li>




      <li className="nav-item">
        <Link
          to={"#"}
          data-bs-toggle="collapse"
          data-bs-target="#orders-collapse"
          aria-expanded="true"
          className={`${ordersActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faAlignJustify} /> Order Management
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                to={"/distributor/order-management/my-orders"}
                className="link-dark"
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/distributor/order-management/new-orders"}
                className="link-dark"
              >
                New Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/distributor/order-management/accepted-orders"}
                className="link-dark"
              >
                Accepted Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/distributor/order-management/rejected-orders"}
                className="link-dark"
              >
                Rejected Orders
              </Link>
            </li>
          </ul>
        </div>
      </li>

      
    </ul>
  );
};

const RetailerMenus = ({ location, history }: any) => {
  const placeOrderActive =
    location === "/retailer/product-lsit" ||
    location === "/retailer/add-to-cart" ||
    location === "/retailer/place-order";
  const inTransitActive = location === "/distributor/orders-in-transit";
  const ordersActive =
    location === "/retailer/order-management" ||
    location === "/retailer/order-management/accepted-orders" ||
    location === "/retailer/order-management/rejected-orders";
    const homeActive = location === "/retailer/dashboard";
    const materialActive = location === "/retailer/materialspecifications";
    const carbonActive = location === "/retailer/carboncalculations";



  const handleTradingPartner = (value: string) => {
    history.push({
      pathname: "/retailer/my-trading-partners",
      state: { value: value },
    });
  };

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link
          to={"/retailer/dashboard"}
          className={`${homeActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"#"}
          className="nav-link"
          data-bs-toggle="collapse"
          data-bs-target="#Mytradingpartners"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faHandshake} /> My Building Partners
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="Mytradingpartners">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li onClick={() => handleTradingPartner("TracePharm")}>
              <Link to={"#"} className="link-dark">
                GallifordTry
              </Link>
            </li>

          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link
          to={"#"}
          className="nav-link"
          data-bs-toggle="collapse"
          data-bs-target="#alert-collapse"
          aria-expanded="true"
        >
          <FontAwesomeIcon icon={faBullhorn} /> Quotations (<span>63</span>)
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="alert-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link to={"#"} className="link-dark">
                {" "}
                - Recalls (29)
              </Link>
            </li>
            <li>
              <Link to={"#"} className="link-dark">
                {" "}
                - Returns (34)
              </Link>
            </li>
          </ul>
        </div>
      </li>

      <li className="nav-item">
        <Link
          to="/retailer/materialspecifications"
          className={`${materialActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faBorderAll} /> Material Specification
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/retailer/carboncalculations"
          className={`${carbonActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faBorderAll} /> Carbon Calculations
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to={"#"}
          data-bs-toggle="collapse"
          data-bs-target="#orders-collapse"
          aria-expanded="true"
          className={`${ordersActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faPoundSign} /> Payments
          <FontAwesomeIcon icon={faAngleDown} className="float-end" />
        </Link>
        <div className="collapse" id="orders-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <Link
                to={"/retailer/order-management/my-orders"}
                className="link-dark"
              >
                My Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/retailer/order-management/new-orders"}
                className="link-dark"
              >
                New Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/retailer/order-management/accepted-orders"}
                className="link-dark"
              >
                Accepted Orders
              </Link>
            </li>
            <li>
              <Link
                to={"/retailer/order-management/rejected-orders"}
                className="link-dark"
              >
                Rejected Orders
              </Link>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <Link
          to="/retailer/orders-in-transit"
          className={`${inTransitActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faShippingFast} /> Carbon Offsetting
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/retailer/orders-in-transit"
          className={`${inTransitActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faBullhorn} /> Certifications
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/retailer/orders-in-transit"
          className={`${inTransitActive && "active"} nav-link`}
        >
          <FontAwesomeIcon icon={faShippingFast} /> Audits
        </Link>
      </li>


    </ul>
  );
};