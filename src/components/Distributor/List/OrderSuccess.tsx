import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useUpdateCount } from "../../../context/cartContext";

const DisOrderSuccess = (props: any) => {
  const [orderReferenceNum, setOrderReferenceNum] = useState("");
  const { id } = useParams<{ id: string }>();
  const updateCount = useUpdateCount();

  useEffect(() => {
    updateCount(0);
    setOrderReferenceNum(id);
  });

  return (
    <div className="text-center mt-5">
      <h3>
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#90e794" }} />{" "}
        Your Order Placed Successfully
      </h3>

    </div>
  );
};

export default DisOrderSuccess;
