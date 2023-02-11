import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faBullhorn,
  faCartShopping,
  faCogs,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
// @ts-ignore
import logo from "../../assets/images/logo.png";
import "./Header.styles.scss";

import Loader from "../../common/Loder";
import {
  getUserData,
  getUserName,
  getCompanyType,
} from "../../services/AuthService";
import { cartCount } from "../../services/cartService";
import { useCount } from "../../context/cartContext";

interface HeaderProps {
  history: any;
}

const Header = (props: HeaderProps) => {
  const [loading, setLoading] = useState(false);
  const [cartCountValue, setCartCount] = useState(0);

  const userName = getUserName();
  const companyType = getCompanyType();
  const countData = useCount();

  const cartCountData = () => {
    cartCount()
      .then((res: any) => {
        setCartCount(res.data.count);
      })
      .catch((err: any) => {});
  };

  const handleLogout = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`http://api2.tracepharm.io:3000/api/auth/signout`, {})
      .then((res) => {
        sessionStorage.clear();
        setLoading(false);
        props.history.push("/login");
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    cartCountData();
    getUserData();
    if (countData > 0) {
      setCartCount(countData);
    }
  }, [countData]);

  return (
    <>
      <div className="header d-flex flex-wrap align-items-center">
        <div className="header-left">
          <Link to={"#"} className="logo">
            <img src={logo} alt="TracePharm logo" />
          </Link>
        </div>
        <div className="header-right">
          <div className="d-flex flex-wrap align-items-center">
            <ul className="nav col-12 col-lg-auto ms-lg-auto">
              {companyType === 0 ? (
                <>
                  {" "}
                  <li>
                    <Link to="/manufacturer/track" className="nav-link">
                      Track &amp; Trace
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Recall
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          Initiate Recall
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Recalls Summary
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#" className="nav-link">
                      Returns
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="nav-link">
                      Smart Contracts
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="#" className="nav-link">
                      Scan Orders
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"} className="nav-link">
                      Recalls
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Returns
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link to={"#"} className="dropdown-item">
                          Initiate Saleable Return
                        </Link>
                      </li>
                      <li>
                        <Link to={"#"} className="dropdown-item">
                          Returns Summary
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="last-menu">
                    <a href={"#"} className="nav-link">
                      Smart Contracts
                    </a>
                  </li>
                </>
              )}
              {companyType === 1 && (
                <>
                  {" "}
                  <li className="mt-1 me-3 ">
                    <FontAwesomeIcon icon={faBullhorn} />
                    <span className="count"> (63)</span>
                  </li>
                  <li className="mt-1 me-3">
                    <Link to={"/distributor/add-to-cart"}>
                      <FontAwesomeIcon icon={faCartShopping} />{" "}
                      <span className="count">
                        ({cartCountValue ? cartCountValue : 0})
                      </span>
                    </Link>
                  </li>
                </>
              )}

              <li className="px-3 prof-border">
                <div className="dropdown text-end me-1 mt-1">
                  <a
                    href="#"
                    className="d-block link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faCircleUser} className="me-1" />
                    <span>{userName} </span>
                  </a>
                  <ul
                    className="dropdown-menu text-small"
                    aria-labelledby="dropdownUser1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faBullhorn} /> Alerts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faBell} /> Notifications
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faUser} /> Profile
                      </a>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to={
                          companyType === 0
                            ? "/manufacturer/add-location"
                            : "/distributor/add-location"
                        }
                      >
                        <FontAwesomeIcon icon={faCogs} /> Setting
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="#"
                        onClick={handleLogout}
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {loading && <Loader />}
    </>
  );
};

export default Header;
