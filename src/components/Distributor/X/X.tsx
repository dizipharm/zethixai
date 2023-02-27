import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function X() {
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
        
        <tr style={{background:'#7fffd4'}}>
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
        <tr style={{background:'lightgrey',border:'black'}}>
          <th style={{ background:'orange', padding: '10px' }}><Link to ="/distributor/carbonemissions" >Carbon Emissions</Link></th>
          <th style={{background:'orange',border:'pink'}}>Water Stress</th>
          <th>Toxic Emissions & Waste</th>
          <th>Clean Tech</th>
          <th>Labor Management</th>
          <th>Product Safety & Quality</th>
          <th>Controversial Sourcing</th>
          <th>Access to Communication</th>
          <th  style={{background:'orange',border:'pink'}}>Board</th>
          <th  style={{background:'orange',border:'pink'}}><Link to ="/distributor/diversityandethics" >Diversity & Ethics</Link></th>
        </tr>
        <tr style={{background:'lightgrey',border:'black'}}>
          <th style={{ padding: '10px' }}>Product Carbon Footprint</th>
          <th>Biodiversity & Land Use</th>
          <th>Packaging material & Waste</th>
          <th>Green Building</th>
          <th style={{background:'orange',border:'pink'}}><Link to ="/distributor/healthandsafety" >Health & Safety</Link></th>
          <th style={{background:'orange',border:'pink'}}>Education & Skills</th>
          <th>Community Relations</th>
          <th>Access to Finance</th>
          <th  style={{background:'pink',border:'pink'}}>Pay</th>
          <th  style={{background:'pink',border:'pink'}}>Tax Transparency</th>
        </tr>
        <tr style={{background:'lightgrey',border:'black'}} >
          <th>Financing Environmental Impact</th>
          <th>Raw Material Sourcing</th>
          <th>Electronic Waste</th>
          <th style={{background:'orange',border:'pink'}}>Renewable Energy</th>
          <th>Human Captital Development</th>
          <th>Consumer Financial Protection</th>
          <th style={{background:'white',border:'white'}}></th>
          <th>Access to Health Care</th>
          <th  style={{background:'orange',border:'pink'}}>Supply Chain</th>
          <th  style={{background:'white',border:'white'}}></th>
        </tr>
        <tr style={{background:'lightgrey',border:'black'}} >
          <th>Climate Change Vulnerability</th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th  style={{background:'white',border:'white'}}></th>
          <th>Supply Chain Labor Standards</th>
          <th>Privacy & Data Security</th>
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
          <th  style={{background:'lightgrey',border:'white'}}>Responsible Investment</th>
          <th  style={{background:'white',border:'white'}}></th>
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
          <th  style={{background:'lightgrey',border:'white'}}>Insuring Health & Demographic Risk</th>
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

export default X;