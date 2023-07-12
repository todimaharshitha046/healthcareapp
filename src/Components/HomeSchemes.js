import React from 'react'
import HomeSchemesImg from "../Images/HomeSchemes.svg"
import '../CSS/HomeSchemes.css'
import { useNavigate } from 'react-router-dom'
function HomeSchemes() {
  const navigate = useNavigate();
  const changeToSchemes = ()=>{
    navigate('/allschemes');
  }
  return (
    <div className='HomeSchemes'>
      <div className='HomeSchemesMain'>
        <img src={HomeSchemesImg}></img>
        <div className='HomeSchemesContent'>
          <div className='HomeSchemesHeading'>Health Care Schemes</div>
          <div className='HomeSchemesMatter'>Health care should be within the reach of every citizen. For providing basic health facilities to all citizens, government has introduced and implemented various health schemes and programmes.</div>
          <button className='HomeSchemeButton' onClick={()=>changeToSchemes()}>learn about all Scehemes</button>
        </div>

      </div>

    </div>
  )
}

export default HomeSchemes