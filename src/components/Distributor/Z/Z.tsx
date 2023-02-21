import Table from 'react-bootstrap/Table';

function Z() {
  return (
<Table bordered style={{borderCollapse:'separate', borderSpacing:'2px 9px'}}>      <thead >
        {/* <tr style={{background:'#191970', color:'white',textAlign:'center'}}>
          <th colSpan={12} >MSCI ESG Score</th>
        </tr> */}

        <br></br>

        <tr style={{ border: '',columnGap:'30px' }}>

          <th colSpan={4} style={{background:'#6495ed', textAlign:'center', color:'white'}}>Environment Pillar</th>

          <th colSpan={4} style={{background:'#6495ed',  textAlign:'center', color:'white'}}>Social Pillar</th>

          <th colSpan={2} style={{background:'#6495ed', textAlign:'center', color:'white'}}>Governance Pillar</th>

        </tr>
        
        <tr style={{background:'#7fffd4',padding: '30px'}}>
          <th>Climate Change</th>
          <th>Natural Capital</th>
          <th>Pollution & Waste</th>
          <th>Env. Opportunities</th>
          <th>Human Captital</th>
          <th>Product Liability</th>
          <th>Stakeholder Opposition</th>
          <th>Social Opportunities</th>
          <th>Corporate Governance</th>
          <th>Corporate Behavior</th>
        </tr>
        <tr>
          <th style={{ background: 'lightgrey',padding: '20px' }}>Carbon Emissions</th>

        </tr>
        <tr>
        <th style={{ background: 'lightgrey',padding: '15px' }}>Product Carbon Footprint</th>

        </tr>
          <tr>
          <th style={{ background: 'lightgrey',padding: '10px' }}>Financing Environmental Impact</th>
   
        </tr>
        <tr style={{background:'lightgrey',border:'white'}} >
          <th>Climate Change Vulnerability</th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
        </tr>

        <tr style={{background:'lightgrey',border:'black'}} >
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
        </tr>

      </thead>
      {/* <tbody>
        <tr>
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
        <tr>
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
        <tr>
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
      </tbody> */}
    </Table>
  );
}

export default Z;