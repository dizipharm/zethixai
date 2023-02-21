import Table from 'react-bootstrap/Table';

function Quotations() {
  return (

    <><h1>Quotations</h1>
    <br>
    
    </br>

    <br>
    
    </br>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Date Received</th>
            <th>Building Supplier</th>
            <th>Totals($)</th>
            <th>Status</th>
            <th>Valid Until</th>
            <th>Carbon [tCO2e]</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AB123456</td>
            <td>10-02-2023</td>
            <td>Saint Gobain</td>
            <td>32,500.70</td>
            <td>Accept</td>
            <td>08-02-2023</td>
            <td>2450</td>

          </tr>
          <tr>
            <td>Cx845678</td>
            <td>01-02-2023</td>
            <td>IBMG</td>
            <td>19,340.20</td>
            <td>Check</td>
            <td>29-01-2023</td>
            <td>6980</td>
          </tr>
          <tr>
          <td>ZY900432</td>
            <td>28-01-2023</td>
            <td>Hanson</td>
            <td>18,340.20</td>
            <td>Reject</td>
            <td>29-02-2023</td>
            <td>1890</td>
          </tr>
          <tr>
          <td>BG987678</td>
            <td>15-01-2023</td>
            <td>Cemex</td>
            <td>19,340.20</td>
            <td>Check</td>
            <td>16-02-2023</td>
            <td>3670</td>
          </tr>
          <tr>
          <td>Cx845678</td>
            <td>12-01-2023</td>
            <td>Saint Gobain</td>
            <td>1350.90</td>
            <td>Accept</td>
            <td>15-02-2023</td>
            <td>1735</td>
          </tr>
          <tr>
          <td>MP98345</td>
            <td>01-01-2023</td>
            <td>Cemex</td>
            <td>2540.20</td>
            <td>Accept</td>
            <td>20-02-2023</td>
            <td>7690</td>
          </tr>
          <tr>
          <td>MP986098</td>
            <td>08-01-2023</td>
            <td>Hanson</td>
            <td>19,340.20</td>
            <td>Check</td>
            <td>29-01-2023</td>
            <td>2450</td>
          </tr>
          <tr>
          <td>HL760678</td>
            <td>01-02-2023</td>
            <td>IBMG</td>
            <td>14,340.20</td>
            <td>Reject</td>
            <td>12-02-2023</td>
            <td>1690</td>
          </tr>
        </tbody>
      </Table></>
  );
}

export default Quotations;