import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

interface TableRow {
  timestamp: number;
  name: string;
  age: number;
  substructural_element_name:string;
  A1_A3:number;
  A4:number;
  WF:number;
  C2:number;
  C3_C4:number;
  C2_C4:number;
  D:number;
  TOTAL_A1_A5:number;
  TOTAL_A_C:number;
  CO2:number;
}

function DisCarboncalc() {
  const [data, setData] = useState<TableRow[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('http://api2.tracepharm.io:8000/carbon/')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);


  return (
    <div>
     

      
      {isVisible ? (
    
    <Table striped bordered hover>
      
      <thead>
        <tr>
        </tr>
        <br/>
        <br/>
        


        <tr>
          
          <th style={{background:"lightblue", textAlign:"center", color:"black"}}>                Carbon Calculations</th>
          
          <th colSpan={10} style={{background:"darkorange", textAlign:"center", color:"black"}}>Building Stages Embodied Carbon[tCO2e]</th>

        </tr>
        <tr>
          <th></th>
          
          <th>Product</th>
          <th>Transport</th>
          <th>Construction</th>
          <th>In Use</th>
          <th>End of Life</th>
          <th>Beyond</th>

        </tr>
        <tr>
          <th></th>
          
          <th>A1-A3</th>
          <th>A4</th>
          <th>A5w</th>
          <th>C2</th>
          <th>C3-C4</th>
          <th>C2-C4</th>
          <th>D</th>
          <th>Total(A1-A5)</th>
          <th>Total(A-C)</th>
          <th>CO2</th>
        </tr>
      </thead>
      <tbody>
      {data.map(row => (
          <tr key={row.timestamp}>
            <th>{row.substructural_element_name}</th>
            <td>{row.A1_A3}</td>
            <td>{row.A4}</td>
            <td>{row.WF}</td>
            <td>{row.C2}</td>
            <td>{row.C3_C4}</td>
            <td>{row.C2_C4}</td>
            <td>{row.D}</td>
            <td>{row.TOTAL_A1_A5}</td>
            <td>{row.TOTAL_A_C}</td>
            <td>{row.CO2}</td>


          </tr>
        ))}
      </tbody>
    </Table>
  ) : null}
  {isVisible ? null : (
  
  <><Table striped bordered hover>

          <thead>
            <tr>
            </tr>
            <br />
            <br />



            <tr>

              <th style={{ background: "grey", textAlign: "center", color: "black" }}>                Carbon Calculations</th>

              <th colSpan={6} style={{ background: "grey", textAlign: "center", color: "black" }}>Building Stages Embodied Carbon[tCO2e]</th>

            </tr>
            <tr>
              <th></th>

              <th>Product</th>
              <th>Transport</th>
              <th>Construction</th>
              <th>In Use</th>
              <th>End of Life</th>
              <th>Beyond</th>

            </tr>
            <tr>
              <th></th>

              <th>A1-A3</th>
              <th>A4</th>
              <th>WF</th>
              <th>C2</th>
              <th>C3-C4</th>
              <th>C2-C4</th>
              <th>D</th>
              <th>Total(A1-A5)</th>
              <th>Total(A-C)</th>
              <th>CO2</th>
            </tr>
          </thead>
          <tbody>
            
              <tr >
                <th>Structural Element</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>


              </tr>
           
          </tbody>
        </Table><Button onClick={() => setIsVisible(true)}>
            Show Carbon Calculations

          </Button></>)}
    </div>
  );
}

export default DisCarboncalc;

