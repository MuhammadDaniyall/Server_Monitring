import React, {useEffect,useState} from 'react'
import axios from 'axios';

export default function dashboard() {

const [serverData, setServerStatusData] = useState([])

  function getAPI(){
    fetch(`https://flowmonitoringapi.flowhcm.com/api/ServerStatus/GetAllServerData`)
      .then(response => response.json())
      .then(data => console.log(data.length,"data").catch(e=console.log(e,'Deatil error'))); 
  }

  const getServerMonitoringData = async () => {
    console.log('How many times')
    try {
      const { data } = await axios.post(`https://flowmonitoringapi.flowhcm.com/api/ServerStatus/GetAllServerData`,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:55.0) Gecko/20100101 Firefox/55.0',
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
     console.log(data,'Data ehe')
    } catch (err) {
      console.log(err, 'ERROR here=>')
     
    }
  }

  useEffect( () => {
    // getAPI()
 getServerMonitoringData()

  }, []); // <- Add dependencies here


  return (
    <div style={{}}>
      <div className={`container`}>
    <h3>Server Landing Page</h3>
 
    <div className={`container`}>
      <h3>Our servers that are available:</h3>
      
    </div>
  </div> 
  
  <div className={`container-fluid`}>
    <div className={`row`}>
      
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card bg-primary`}>
          <div className={`card-heading`}>Linux Server</div>
          <div className={`card-body`}>
            <ul>
              <li>Red Hat Enterprise Linux</li>
              <li>CentOS</li>
              <li>Ubuntu</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
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
      
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card bg-primary`}>
          <div className={`card-heading`}>Linux Server</div>
          <div className={`card-body`}>
            <ul>
              <li>Red Hat Enterprise Linux</li>
              <li>CentOS</li>
              <li>Ubuntu</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card text-bg-primary`}>
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
      
      
      
    </div>
    
  </div>
  </div>
  )
}
