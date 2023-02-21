import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
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
// @ts-ignore
import dash from "../../../assets/images/carbonoffset.png"
interface ScanOrdersProps {}

interface ScanOrdersState {}

class Carbonoffset extends React.Component<
  ScanOrdersProps,
  ScanOrdersState
> {
  state = {};
  render() {
    return (
      <>

        <img src ={dash} alt="dash" />
        <hr className="row-divider" />
      </>
    );
  }
}

export default Carbonoffset;