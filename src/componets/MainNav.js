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
     //console.log(Search);
    props.ReGetValue(e.target.value)
  };
  function L(e){
    e.preventDefault()
   console.log(e.nativeEvent.path[0].value);
}
  return (
    <>
      {/* <nav className='Main-Nav top-0 sticky bg-orange-500 rounded-full'>
          <ul>
            <li><Link className='li_Main' to="/">Home</Link></li>
            <li className='li_Search relative isolate'><input className='search' type="search" name="search" id="search" onChange={GetValue} value={Search} placeholder="Search" />
              <ul className='absolute'>
                 {/* <li>HI</li> */}
              {/* </ul>
            </li>
            <li><Link className='li_Save Nav_Cart_IMG_Contain' to="/Save"><img className='Nav_Cart_IMG' src="https://freepngimg.com/thumb/cart/2-2-cart-png-file.png" alt="" /></Link></li>
            <li><Link className='li_Noted' to="/Noted">{Noted}</Link></li>
          </ul>
      </nav>
      <div> */}
        {/* <Weather/> */}
      {/* </div> */} 


      <div className="Main_Nav">
        <div className="MN_1_Div">
         <Link to="/User">
            <img
            src="https://th.bing.com/th/id/R.17f2c2b13373bd4048fa4c080448ed25?rik=EMhK7I2caY2%2bAw&riu=http%3a%2f%2fwww.colegiodepadua.com.br%2fimg%2fuser.png&ehk=QKwFrUE%2fGegwZb1KOz9FS5U0rT4ZUGhr%2bMjaR2jdDeo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
            alt=""
              /> 
          </Link>
        <Link to="/"><h1>Store</h1></Link>
        </div>
        <div className="MN_2_Div">
            <form className="MN_2_Div_Form" action="" onSubmit={(e)=> e.preventDefault()}>
                <input type="search" name="" className="MN_2_search" onInput={L} placeholder="Search" />
            </form>
        </div>
        <div className="MN_3_Div">
           <Link to="/Saved"><img src="https://freepngimg.com/thumb/cart/2-2-cart-png-file.png" alt="" /></Link>
           <Link to="/Noted"><h1>Noted</h1></Link>
        </div>
      </div>
      <Outlet/>

      {/* /////// */}
      
    </>
  )
}

MainNav.propTypes = {
   
}
MainNav.defaultProps={
   

}
export default MainNav
