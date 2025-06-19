import React, { useState } from 'react'
import Navber from './components/Navber'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Card from './components/Card'

const App = () => {

  const  [boolean,setboolean]=useState(false)
  
  return (
    
    <div style={{backgroundColor:`${boolean?"black":"white"}`, transition:"0.3s"}}>
      <Navber bool={boolean} setbool={setboolean}/>
    {/* <Slider/> */}
    <Card bool={boolean} />
    <Footer bool={boolean} />
    </div>
    
  )
}

export default App