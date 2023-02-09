import React, {useEffect,useState} from 'react'
import axios from 'axios';

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
    <div style={{}}>
      <div className={`container`}>
    {/* <h3>Server Landing Page</h3> */}
 
    <div className={`container`}>
      <h3>Our servers that are available:</h3>
      
    </div>
  </div>

  <div style={{border: 'solid #000', height:'40px', width: '40px'}}>

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
