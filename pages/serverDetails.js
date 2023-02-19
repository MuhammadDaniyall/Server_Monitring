import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function serverDetails() {
  const [screenHeight, setScreenHeight] = useState(0)
  const [serverData, setServerStatusData] = useState([])

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    getServerMonitoringData()
  }, [])
  

  const getServerMonitoringData = async () => {
    try {
      const { data } = await axios.post(`https://flowmonitoringapi.flowhcm.com/api/ServerStatus/GetServerHistory?serverMasterID=1`,{})
      setServerStatusData(data)
       console.log(data,'Data ehe')
    } catch (err) {
      console.log(err, 'Error server details data=>')

    }
  }


  return (
    <div style={{ backgroundColor: '#fafbfe', height:`${screenHeight}px`, display:'flex', flexDirection:'column' }}>
      <div style={{backgroundColor:'#5036b1', height:'50px', flexDirection:'row', display:'flex',justifyContent:'space-between', alignItems:"center"}}>

          <h2 style={{color:'#fff',marginLeft:'15px'}}>FlowHCM Servers Status Deatil</h2>
          <div style={{height:'30px', width:'30px', borderRadius:'15px', backgroundColor:'#fff',marginRight:'15px'}}></div>

      </div>

  <h1>{serverData[0]?.serverName}</h1>
      {serverData.map((item, index) => (
  
        <div>
          <br></br>
         <h5>{item.cpuStatus}</h5>
         <h5>{item.diskStatus}</h5>
         <h5>{item.memoryStatus}</h5>
         <h5>{item.createdOn}</h5>




      </div>
  ))}

    </div>
  )
}
