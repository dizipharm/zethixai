import Table from 'react-bootstrap/Table';

function Payments() {
  return (

    <><h1>Payments</h1>
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
            <td>2450</td>
          </tr>
          <tr>
          <td>Cx845678</td>
            <td>01-02-2023</td>
            <td>IBMG</td>
            <td>19,340.20</td>
            <td>Check</td>
            <td>29-01-2023</td>
            <td>2450</td>
          </tr>
          <tr>
          <td>Lx845678</td>
            <td>01-02-2023</td>
            <td>Saint Gobain</td>
            <td>42,340.20</td>
            <td>Check</td>
            <td>29-01-2023</td>
            <td>2450</td>
          </tr>
          <tr>
          <td>Hx895678</td>
            <td>01-02-2023</td>
            <td>Cemex</td>
            <td>43,340.20</td>
            <td>Accept</td>
            <td>18-01-2023</td>
            <td>7550</td>
          </tr>
          <tr>
          <td>Lx845678</td>
            <td>9-02-2023</td>
            <td>IBMG</td>
            <td>14,340.20</td>
            <td>Check</td>
            <td>24-01-2023</td>
            <td>6550</td>
          </tr>
          <tr>
          <td>Cx845678</td>
            <td>01-02-2023</td>
            <td>Cemex</td>
            <td>19,340.20</td>
            <td>Check</td>
            <td>29-01-2023</td>
            <td>2450</td>
          </tr>
          <tr>
          <td>Gx848918</td>
            <td>01-02-2023</td>
            <td>Hanson</td>
            <td>15,371.20</td>
            <td>Check</td>
            <td>29-01-2023</td>
            <td>5790</td>
          </tr>
        </tbody>
      </Table></>
  );
}

export default Payments;