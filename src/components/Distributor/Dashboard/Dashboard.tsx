import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import OrderCard from "./OrderCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faTruckFast,
  faCheck,
  faUser,
  faCheckDouble,
  faRotateLeft,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { getUserName } from "../../../services/AuthService";

interface ScanOrdersProps {}

interface ScanOrdersState {}

class DistributorDashboard extends React.Component<
  ScanOrdersProps,
  ScanOrdersState
> {
  state = {};
  render() {
    return (
      <>
        <h1 className="page-title big">
          Hi,{" "}
          <span className="nickname">
            {getUserName()}{" "}
            <small>
              (<FontAwesomeIcon icon={faBullhorn} className="font-size-10" />{" "}
              <span className="orang-color">63</span>)
            </small>
          </span>
        </h1>
        <Row>
          <OrderCard
            title="Total Orders"
            orderValue="13999"
            value1="8000"
            value2="5999"
            icon={faTruckFast}
            iconClor="green"
          />
          <OrderCard
            title="Received Orders"
            orderValue="7500"
            value1="4499"
            value2="3001"
            icon={faCheck}
            iconClor="green"
          />
        </Row>

        <hr className="row-divider" />

        <Row>
          <OrderCard
            title="Pending Orders"
            orderValue="7101"
            value1="5000"
            value2="5999"
            icon={faUser}
            iconClor="green"
          />
          <OrderCard
            title="Rejected Orders"
            orderValue="3500"
            value1="2501"
            value2="999"
            icon={faCheckDouble}
          />
        </Row>

        <hr className="row-divider" />

        <Row>
          <OrderCard
            title="Returns"
            orderValue="200"
            value1="159"
            value2=" 41"
            icon={faRotateLeft}
          />
          <OrderCard
            title="Recalls"
            orderValue="5500"
            value1="3500"
            value2="2000"
            icon={faPaperPlane}
          />
        </Row>

        <hr className="row-divider" />
      </>
    );
  }
}

export default DistributorDashboard;
