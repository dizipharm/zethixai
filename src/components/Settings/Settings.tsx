import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import AddLocation from "./AddLocation";
import LocationList from "./LocationList";

const Settings = () => {
  const [pageType, setOrderPageType] = useState("ADD_LOCATION");
  const history = useHistory();
  const { pathname } = useLocation();

  const addLocationPath = "/distributor/add-location";
  const addLocationPathManf = "/manufacturer/add-location";
  const locationListPath = "/distributor/location-list";
  const locationListPathManf = "/manufacturer/location-list";

  const addLocationPathFn = () => {
    if (pathname.includes("distributor")) {
      history.push(addLocationPath);
    } else {
      history.push(addLocationPathManf);
    }
  };

  const locationListPathFn = () => {
    if (pathname.includes("distributor")) {
      history.push(locationListPath);
    } else {
      history.push(locationListPathManf);
    }
  };

  const handleSelect = (type: any) => {
    setOrderPageType(type);

    if (type === "ADD_LOCATION") {
      addLocationPathFn();
    } else if (type === "LOCATION_LIST") {
      locationListPathFn();
    }
  };

  useEffect(() => {
    if (pathname === addLocationPath || pathname === addLocationPathManf) {
      setOrderPageType("ADD_LOCATION");
    } else if (
      pathname === locationListPath ||
      pathname === locationListPathManf
    ) {
      setOrderPageType("LOCATION_LIST");
    }
  }, [pathname]);

  useEffect(() => {
    addLocationPathFn();
  }, []);

  return (
    <>
      <Nav
        variant="pills"
        activeKey={pageType}
        className="order-nav mb-2"
        onSelect={(eventKey: any) => handleSelect(eventKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="ADD_LOCATION" className="ps-0">
            Add Location
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="LOCATION_LIST" className="ps-0">
            Location(s) List
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <hr className="row-divider mb-4 mt-0" />
      {pageType === "ADD_LOCATION" && <AddLocation />}
      {pageType === "LOCATION_LIST" && <LocationList />}
    </>
  );
};

export default Settings;
