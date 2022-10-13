import React,{ useRef } from 'react'
import PropTypes from 'prop-types'


const TotalCart = props => {
    //  console.log(props.ItemNumber);
    const BTN = useRef()
    let L = (props.RE_IM )? props.RE_IM.length : 0;
    let SUM = (props.ItemNumber)? props.ItemNumber
              .map((e)=> Number(e.PR))
              .reduce((P ,C)=> P+C) : "Chacking";
    // console.log(SUM);
    if(L === 0 ){
        SUM = 0;
    }

return (
    <>
      <div className='TotalCartDiv'><span>Sub Total of Itms{L} =TotalCost {SUM}$ </span><button className='Save_G_D_2_Div_DC_B_2' ref={BTN}>Buy All</button></div>
    </>
  )
}

TotalCart.propTypes = {

}

export default TotalCart
