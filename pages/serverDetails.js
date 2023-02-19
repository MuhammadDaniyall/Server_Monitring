import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';
import { faker } from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};



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
    getServerMonitoringData()
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

// cpuStatus: 0,
// createdOn: "2023-02-16 09:26:43 AM",
// diskStatus: 0,
// memoryStatus: 26.413,
// serverMasterId: 1,
// serverName: "SERVER70"

const labels = serverData.map((d)=>d.createdOn)
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

 const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map((d,i) => d[i].memoryStatus),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    // {
    //   label: 'Dataset 3',
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   backgroundColor: 'rgb(53, 162, 235)',
    // },
  ],
};
console.log(data.datasets,'datasets=>');
  return (
    <div style={{ backgroundColor: '#fafbfe', height:`${screenHeight}px`, display:'flex', flexDirection:'column' }}>
      <div style={{backgroundColor:'#5036b1', height:'50px', flexDirection:'row', display:'flex',justifyContent:'space-between', alignItems:"center"}}>

          <h2 style={{color:'#fff',marginLeft:'15px'}}>FlowHCM Servers Status Deatil</h2>
          <div style={{height:'30px', width:'30px', borderRadius:'15px', backgroundColor:'#fff',marginRight:'15px'}}></div>

      </div>

      <Bar options={options} data={data} />;

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
