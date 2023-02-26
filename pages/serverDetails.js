import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto'
import {Line, Chart} from 'react-chartjs-2';

// import faker from 'faker';
// import { faker } from '@faker-js/faker';




export default function serverDetails() {
  const [screenHeight, setScreenHeight] = useState(0)
  const [serverData, setServerStatusData] = useState([{
    cpuStatus: 0,
createdOn: "2023-02-16 09:26:43 AM",
diskStatus: 0,
memoryStatus: 26.413,
serverMasterId: 1,
serverName: "SERVER70"
  },{
    cpuStatus: 5,
    createdOn: "2023-02-16 09:30:43 AM",
    diskStatus: 0,
    memoryStatus: 28.413,
    serverMasterId: 1,
    serverName: "SERVER70"
  }])

  useEffect(() => {
    setScreenHeight(window.innerHeight);
   // getServerMonitoringData()
  }, [])
  

  const getServerMonitoringData = async () => {
    try {
      const { data } = await axios.post(`https://flowmonitoringapi.flowhcm.com/api/ServerStatus/GetServerHistory?serverMasterID=1`,{})
      // setServerStatusData(data)
      //  console.log(data,'Data ehe')
    } catch (err) {
      alert(err)
      console.log(err, 'Error server details data=>')

    }
  }

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

// cpuStatus: 0,
// createdOn: "2023-02-16 09:26:43 AM",
// diskStatus: 0,
// memoryStatus: 26.413,
// serverMasterId: 1,
// serverName: "SERVER70"

// const labels = serverData.map((d)=>d.createdOn)
/// data: labels.map((d,i) => d[i].memoryStatus),
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


console.log(data.datasets,'datasets=>');
  return (
    <div style={{ backgroundColor: '#fafbfe', height:`${screenHeight}px`, display:'flex', flexDirection:'column' }}>
      <div style={{backgroundColor:'#5036b1', height:'50px', flexDirection:'row', display:'flex',justifyContent:'space-between', alignItems:"center"}}>

          <h2 style={{color:'#fff',marginLeft:'15px'}}>FlowHCM Servers Status Deatil</h2>
          <div style={{height:'30px', width:'30px', borderRadius:'15px', backgroundColor:'#fff',marginRight:'15px'}}></div>

        
    </div>


    <Line
      data={data}
      width={400}
      height={400}
    />  
  {/* <h1>{serverData[0]?.serverName}</h1>
      {serverData.map((item, index) => (
  
        <div>
          <br></br>
         <h5>{item.cpuStatus}</h5>
         <h5>{item.diskStatus}</h5>
         <h5>{item.memoryStatus}</h5>
         <h5>{item.createdOn}</h5>




      </div>
  ))} */}

    </div>
  )
}
