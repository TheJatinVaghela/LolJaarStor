import React from 'react'
import PropTypes from 'prop-types'

const Noted = props => {
  let Sort_Saved_Noted;
  let Re_Saved_Noted_Get;
  let Saved_Noted_Get = JSON.parse(localStorage.getItem("SAVE"));
  if(Saved_Noted_Get !== null){
    Sort_Saved_Noted = Saved_Noted_Get.map((e,index)=>{
      e.id = index;
      return e
    })
    Re_Saved_Noted_Get = Sort_Saved_Noted.filter((e)=> e.note);
  };
  console.log(Re_Saved_Noted_Get);
  return (
     <>
    <h1>NOTE</h1>
     {
       Re_Saved_Noted_Get && Re_Saved_Noted_Get.map((e,index)=>{
          return(
            <div key={index} id={e.id}>
               <span>{e.HH}</span> // <span>{e.NO}</span> // <span>{e.RE}</span> // <span>{e.note}</span>// <span>{e.id}</span>
            </div>
           )
        })
      }
    </>
  )
}

Noted.propTypes = {

}

export default Noted
