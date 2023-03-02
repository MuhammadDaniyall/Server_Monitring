import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FiCpu, FiHardDrive, FiArrowRight } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { CgSmartphoneRam } from "react-icons/cg";
import { RxReader } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { Tooltip } from 'react-tooltip'

import 'react-tooltip/dist/react-tooltip.css'

import { useRouter } from 'next/router'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function dashboard() {
  const router = useRouter()

  const [serverData, setServerStatusData] = useState([])
  const [screenHeight, setScreenHeight] = useState(0)

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
      alert(err)
      console.log(err, 'Error Server Detail')

    }
  }

  useEffect(() => {
    // getAPI()
    getServerMonitoringData()
    setTimeout(() => {
      getServerMonitoringData()
    }, 60000);
    setScreenHeight(window.innerHeight)
  }, [])

console.log(serverData);
  return (
    <div style={{ backgroundColor: '#fafbfe', height:`${screenHeight}px`, display:'flex', flexDirection:'column' }}>
      <div style={{backgroundColor:'#5036b1', height:'50px', flexDirection:'row', display:'flex',justifyContent:'space-between', alignItems:"center"}}>
        {/* <h3>Server Landing Page</h3> */}

   
          <h2 style={{color:'#fff',marginLeft:'15px'}}>FlowHCM All Servers Status</h2>
          <div style={{height:'30px', width:'30px', borderRadius:'15px', backgroundColor:'#fff',marginRight:'15px'}}></div>


      </div>
      <div style={{ display: 'flex', flexWrap: "wrap", marginTop:'10px' }}>
        {serverData.map((item, index) => (
          <div key={index} style={{
            height: '185px', width: '320px', marginLeft: '15px', borderRadius: '5px', marginTop: '5px',
            background: '#dbd7f0', flexDirection:'row',display:'flex'
            // boxShadow:'8px 8px 7px #4732a2,-8px -8px 7px #553cc2'

          }}>
            <div style={{}}>
            <h4 style={{ marginLeft: '10px', color: '#5036b1',marginTop:'5px' }}>{item.serverName}</h4>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px', alignItems: 'center', marginTop: '5px' }}>
              <FiCpu data-tooltip-content="CPU"  className="my-anchor-element" color='#ff7750' />
              <h6 style={{ marginLeft: '10px', marginBottom: '.1rem' }}>{item.cpuStatus} %</h6>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px', alignItems: 'center', marginTop: '5px' }}>
              <CgSmartphoneRam data-tooltip-content="RAM"  className="my-anchor-element" color='#ff7750' />
              <h6 style={{ marginLeft: '10px', marginBottom: '.1rem' }}>{item.memoryStatus} %</h6>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px', alignItems: 'center', marginTop: '5px' }}>
              <FiHardDrive data-tooltip-content="Hard Disk"  className="my-anchor-element" color='#ff7750' />
              <h6 style={{ marginLeft: '10px', marginBottom: '.1rem' }}>{item.diskStatus}</h6>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px', alignItems: 'center', marginTop: '5px' }}>
              <RxReader data-tooltip-content="Hard Disk Read"  className="my-anchor-element" color='#ff7750' />
              <h6 style={{ marginLeft: '10px', marginBottom: '.1rem' }}>{item.diskReadStatus} KB/s</h6>
              <TfiWrite data-tooltip-content="Hard Disk Write"  className="my-anchor-element" color='#ff7750' style={{marginLeft:'10px'}} />
              <h6 style={{ marginLeft: '10px', marginBottom: '.1rem' }}>{item.diskWriteStatus} KB/s</h6>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px', alignItems: 'center', marginTop: '5px' }}>
              <BiTime data-tooltip-content="Time"  className="my-anchor-element" color='#ff7750' />
              <h6 style={{ marginLeft: '10px', marginBottom: '.1rem' }}>{item.createdOn}</h6>
            </div>
          </div>
      <div style={{display:'flex', alignItems:'center',paddingLeft:'50px'}} 
      onClick={() => router.push('/serverDetails')}
      >
        {/* <a href="http://192.168.100.177:3000/serverDetails"> */}
          <FiArrowRight color='#ff7750' size={30} />
          {/* </a> */}
          </div>
          </div>
        ))}
    {!serverData.length &&  <Skeleton style={{height: '150px', width: '320px', marginLeft: '15px', borderRadius: '5px', marginTop: '5px',
            background: '#dbd7f0'}} count={16} inline={true} />}

      </div>

      
      <Tooltip anchorSelect=".my-anchor-element" place="top">
  Hello world!
</Tooltip>

      {/* <div className={`container-fluid`}>
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
      
    </div>
  </div> */}

    </div>
  )
}
