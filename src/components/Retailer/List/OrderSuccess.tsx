import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";


const ListOrderSuccess = (props: any) => {
  const [orderReferenceNum, setOrderReferenceNum] = useState("");
 
  return (
    <div className="text-center mt-5">
      <h3>
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#90e794" }} />{" "}
        Your List is Saved  Successfully
      </h3>
     
    </div>
  );
};

export default ListOrderSuccess;
