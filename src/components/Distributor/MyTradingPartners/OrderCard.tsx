import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
// @ts-ignore
import logo from "../../assets/images/logo.png";
import "./ScanOrders.styles.scss";
import { Col, Row } from "react-bootstrap";

interface OrderCardProps {
  title: string;
  orderValue: string;
  value1: string;
  value2: string;
  icon: any;
  iconClor?: string;
}

const OrderCard = (props: OrderCardProps) => {
  const { title, orderValue, value1, value2, icon, iconClor } = props;
  return (
    <>
      <Col className="block-div">
        <div className="block-title">
          <FontAwesomeIcon
            icon={icon}
            className={`${iconClor == "green" ? "icon-green" : "icon-orange"}`}
          />
          <span className="block-heading">{title}</span>
        </div>
        <Row>
          <Col lg="5" className="primary-stats">
            <div className="value">
              <span>{orderValue}</span>
            </div>
            <Link to={"#"} className="view-statement-link">
              <span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> View Details
              </span>
            </Link>
          </Col>
          <Col lg="7" className="secondary-stats">
            <div className="block">
              <span className="label">Constructions</span>
              <span className="value">{value1}</span>
            </div>

            <div className="block">
              <span className="label">Raw Materials</span>
              <span className="value">{value2}</span>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default OrderCard;
