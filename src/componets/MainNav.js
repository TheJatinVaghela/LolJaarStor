import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";
//  import Weather from './Weather.js'

const MainNav = props => {
  const [Search, useSearch] = useState("")
  let Save = "Save's";
  let Noted = "Noted"
  
   function GetValue (e){
    useSearch(prew => prew = e.target.value);
    console.log(Search);
    props.ReGetValue(e.target.value)
  };
 
  return (
    <>
      <nav className='Main-Nav top-0 sticky bg-orange-500 rounded-full'>
          <ul>
            <li><Link className='li_Main' to="/">Home</Link></li>
            <li className='li_Search relative isolate'><input className='search' type="search" name="search" id="search" onChange={GetValue} value={Search} placeholder="Search" />
              <ul className='absolute'>
                 {/* <li>HI</li> */}
              </ul>
            </li>
            <li><Link className='li_Save' to="/Save">{Save}</Link></li>
            <li><Link className='li_Noted' to="/Noted">{Noted}</Link></li>
          </ul>
      </nav>
      <div>
        {/* <Weather/> */}
      </div>
      <Outlet/>
    </>
  )
}

MainNav.propTypes = {
   
}
MainNav.defaultProps={
   

}
export default MainNav
