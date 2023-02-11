import {
  faBox,
  faBoxOpen,
  faReceipt,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const trackEventFn = (d: any) => {
  let dt: any = {};

  if (d.event === "DISPATCH") {
    return (dt = {
      icon: <FontAwesomeIcon icon={faTruck} />,
      dateTime: d?.updatedAt,
      status: "Product Shipped",
      shipmentTrack: "Shiped",
      address: d?.address,
    });
  } else if (d.event === "LSPRECEIVED") {
    return (dt = {
      icon: <FontAwesomeIcon icon={faBox} />,
      dateTime: d?.updatedAt,
      status: "Product Shipper Recieved",
      shipmentTrack: "Lps Received",
      address: d?.address,
    });
  } else if (d.event === "IN-TRANSIT") {
    return (dt = {
      icon: <FontAwesomeIcon icon={faTruckFast} />,
      dateTime: d?.updatedAt,
      status: "Product In Transit",
      shipmentTrack: "In Transit",
      address: d?.address,
    });
  } else if (d.event === "DELIVERED") {
    return (dt = {
      icon: <FontAwesomeIcon icon={faBox} />,
      dateTime: d?.updatedAt,
      status: "Product Shipper Delivered",
      shipmentTrack: "Delivered",
      address: d?.address,
    });
  } else if (d.event === "RECEIVED") {
    return (dt = {
      icon: <FontAwesomeIcon icon={faReceipt} />,
      dateTime: d?.updatedAt,
      status: "Product Received",
      shipmentTrack: "Receved",
      address: d?.address,
    });
  }
};

export { trackEventFn };
