import React from "react";
import { Link, useLocation } from "react-router-dom";
import Trace from "./Trace";
import Track from "./Track";
import "./TrackAndTrace.styes.scss";

const TrackAndTrace = () => {
  const { pathname } = useLocation();
  return (
    <>
      <h1 className="page-title big">
        <Link
          to={"/manufacturer/track"}
          className={`${
            pathname === "/manufacturer/track" ? "linkActive" : ""
          }`}
        >
          Track Dashboard
        </Link>{" "}
        |
        <Link
          to={"/manufacturer/trace"}
          className={`${
            pathname === "/manufacturer/trace" ? "linkActive" : ""
          }`}
        >
          {" "}
          Trace Dashboard{" "}
        </Link>
      </h1>

      {pathname === "/manufacturer/track" ? <Track /> : <Trace />}
    </>
  );
};

export default TrackAndTrace;
