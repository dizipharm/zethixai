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

class RetailerDashboard extends React.Component<
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
        

        <hr className="row-divider" />
      </>
    );
  }
}
export default RetailerDashboard;

