import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
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
// @ts-ignore
import dash from "../../../assets/images/dash.jpg"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Internal Finishes",
    "Superstructure",
    "Façade",
    "Internal walls and partitions",
    "Internal finishes",
    "FF&E",
    "Building Services",
  ],
  datasets: [
    {
      label: '',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#c45850",
        "#CD9C5C",
        "#1e7145",
      ],
      borderColor: [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#c45850",
        "#CD9C5C",
        "#1e7145",
      ],
      borderWidth: 1,
    },
  ],
};

 function Dashboard() {
  return(
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
    <div style={{width:'50%', height:'50%'}}>
      
    <Doughnut data={data} />
    </div>
    </>
  )
}


export default Dashboard
