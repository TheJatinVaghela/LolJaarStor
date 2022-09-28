import React,{ useState , useEffect } from 'react'
import PropTypes from 'prop-types'
import Write_Note from './Write_Note.js'
const Weather = props => {
    let Saved = JSON.parse(localStorage.getItem("SAVE"))
    let SAVE_Ary=[];
    let infoOBJ; 
    let Mt = Math.floor(Math.random() * 11);
    useEffect(() => {
    //    if (Saved !== null ) {
    //     SAVE_Ary+=[{S:Saved}];
    //    }else{
    //    SAVE_Ary=null;
    //    localStorage.setItem("SAVE" , JSON.stringify(SAVE_Ary));
    //    }
    (Saved !== null)? SAVE_Ary+=[Saved] : SAVE_Ary=null && localStorage.setItem("SAVE" , JSON.stringify(SAVE_Ary));
    
    }, [])
   
    let SaveToLocale = (e)=>{
         infoOBJ = {
            h1 : "One H!",
            NO : "NOP!",
            RE: Mt,
         }
        let Saved = JSON.parse(localStorage.getItem("SAVE"));
        if (Saved !== null ) {
            // console.log("NOT NULL");
            SAVE_Ary=Saved;
            SAVE_Ary.push(infoOBJ);
           // console.log(SAVE_Ary);
            localStorage.setItem("SAVE" , JSON.stringify(SAVE_Ary))
           }else{
            // console.log("NULL");
            SAVE_Ary=[infoOBJ];
            localStorage.setItem("SAVE" , JSON.stringify(SAVE_Ary))
           }
     }
       
     let Show_Hide = (e)=>{
        let Elm = document.getElementsByClassName("Write_Note_Div_Hide");
        if(Elm.length === 0){ return alert("One Note Is Open Cindly Close That To Open Another") }
        Elm[0].classList.replace("Write_Note_Div_Hide" , "Write_Note_Div_Show")
        
     }
  return (
    <>
     <div>
        <h1>{Mt}</h1>
        <button onClick={SaveToLocale}>Save</button>
        <button onClick={Show_Hide}>Note</button>
     </div>
     <Write_Note Numb={Mt}/>
    </>
  )
}

Weather.propTypes = {}

export default Weather