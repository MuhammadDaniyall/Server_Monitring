import React, {useEffect,useState} from 'react'
import axios from 'axios';
import {  FiCpu,FiHardDrive } from "react-icons/fi";
import {  BiTime } from "react-icons/bi";
import {  CgSmartphoneRam } from "react-icons/cg";


export default function dashboard() {

const [serverData, setServerStatusData] = useState([])

  // function getAPI(){
  //   fetch(`https://flowmonitoringapi.flowhcm.com/api/ServerStatus/GetAllServerData`)
  //     .then(response => response.json())
  //     .then(data => console.log(data.length,"data").catch(e=console.log(e,'Deatil error'))); 
  // }

  const getServerMonitoringData = async () => {
    // console.log('How many times')
    try {
      const { data } = await axios.get(`https://flowmonitoringapi.flowhcm.com/api/ServerStatus/GetAllServerData`)
      setServerStatusData(data)
    //  console.log(data,'Data ehe')
    } catch (err) {
      console.log(err, 'ERROR here=>')
     
    }
  }

  useEffect( () => {
    // getAPI()
 getServerMonitoringData()

  }, []); // <- Add dependencies here
// console.log(serverData,'serverData=>');

  return (
    <div style={{backgroundColor:'#fafbfe'}}>
      <div className={`container`}>
    {/* <h3>Server Landing Page</h3> */}
 
    <div className={`container`}>
      <h3>FlowHCM All Servers Status</h3>
      
    </div>
  </div>
<div style={{display:'flex', flexWrap:"wrap"}}>
  <div style={{ height:'150px', width: '320px', marginLeft: '15px', borderRadius:'5px', marginTop:'5px',
background: '#dbd7f0',
// boxShadow:'8px 8px 7px #4732a2,-8px -8px 7px #553cc2'

}}>
    <h4 style={{marginLeft:'5px', color:'#fff'}}>Server name</h4>
    <div style={{display:'flex', flexDirection:'row', marginLeft: '15px', alignItems:'center',marginTop:'5px'}}>
    <FiCpu color='#ff7750'  />
    <h6 style={{marginLeft:'10px',marginBottom:'.1rem' }}>CUP %</h6>
    </div>

    <div style={{display:'flex', flexDirection:'row', marginLeft: '15px', alignItems:'center',marginTop:'5px'}}>
    <CgSmartphoneRam  color='#ff7750'/>
    <h6 style={{marginLeft:'10px',marginBottom:'.1rem' }}>CUP %</h6>
    </div>

    <div style={{display:'flex', flexDirection:'row', marginLeft: '15px', alignItems:'center',marginTop:'5px'}}>
    <FiHardDrive  color='#ff7750'/>
    <h6 style={{marginLeft:'10px',marginBottom:'.1rem' }}>CUP %</h6>
    </div>

    <div style={{display:'flex', flexDirection:'row', marginLeft: '15px', alignItems:'center',marginTop:'5px'}}>
    <BiTime color='#ff7750'/>
    <h6 style={{marginLeft:'10px',marginBottom:'.1rem' }}>CUP %</h6>
    </div>
</div>
<div style={{border: 'solid #000', height:'140px', width: '320px', marginLeft: '15px', borderRadius:'5px', marginTop:'5px'}}>
    <h4>Server name</h4>
</div>
<div style={{border: 'solid #000', height:'140px', width: '320px', marginLeft: '15px', borderRadius:'5px', marginTop:'5px'}}>
    <h4>Server name</h4>
</div>
<div style={{border: 'solid #000', height:'140px', width: '320px', marginLeft: '15px', borderRadius:'5px', marginTop:'5px'}}>
    <h4>Server name</h4>
</div>
<div style={{border: 'solid #000', height:'140px', width: '320px', marginLeft: '15px', borderRadius:'5px', marginTop:'5px'}}>
    <h4>Server name</h4>
</div>
<div style={{border: 'solid #000', height:'140px', width: '320px', marginLeft: '15px', borderRadius:'5px', marginTop:'5px'}}>
    <h4>Server name</h4>
</div>
<div style={{border: 'solid #000', height:'140px', width: '320px', marginLeft: '15px', borderRadius:'5px', marginTop:'5px'}}>
    <h4>Server name</h4>
</div>
</div>
  <div className={`container-fluid`}>
    <div className={`row`}>
      {serverData.map((item, index) => (
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card bg-primary`}>
          <div className={`card-heading`}>Linux Server</div>
          <div className={`card-body`}>
            <ul>
              <li>{item.serverName}</li>
              <li>{item.cpuStatus}</li>
              <li>{item.memoryStatus}</li>
            </ul>
          </div>
        </div>
      </div>
      ))}

     
      {/* <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card bg-primary`}>
          <div className={`card-heading`}>Windows Server</div>
          <div className={`card-body`}>
            <ul>
              <li>Windows Server 2012</li>
              <li>Windows Server 2012</li>
              <li>Windows Server 2012</li>
            </ul>
          </div>
        </div>
      </div>
       */}

      
      
      
    </div>
    
  </div>
  </div>
  )
}
