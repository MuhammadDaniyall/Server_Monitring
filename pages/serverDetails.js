import React, { useEffect, useState } from 'react'

export default function serverDetails() {
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.innerHeight)
  }, [])
  
  return (
    <div style={{ backgroundColor: '#fafbfe', height:`${screenHeight}px`, display:'flex', flexDirection:'column' }}>
      <div style={{backgroundColor:'#5036b1', height:'50px', flexDirection:'row', display:'flex',justifyContent:'space-between', alignItems:"center"}}>

          <h2 style={{color:'#fff',marginLeft:'15px'}}>FlowHCM Servers Status Deatil</h2>
          <div style={{height:'30px', width:'30px', borderRadius:'15px', backgroundColor:'#fff',marginRight:'15px'}}></div>

      </div>


    </div>
  )
}
