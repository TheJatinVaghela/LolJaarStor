import React, { useState } from "react";
import PropTypes from "prop-types";
import { logDOM } from "@testing-library/react";

const Write_Note = (props) => {
  // let SubNum = 0;
 
  const [SubNum, setSubNum] = useState(0)
  let Re_SunNum = 0;
  let WNDS = "Write_Note_Div_Show";
  let WNDH = "Write_Note_Div_Hide";
  let EditElm = document.getElementsByClassName("Edit");
  let Elm = document.getElementsByClassName(WNDH);

  const [TakeNote_Holder, setTakeNote_Holder] = useState("");
  if (props.Run_Show_Hide >= 1) {
     //console.log(props.Run_Show_Hide);
     let A = document.querySelector(".Write_Note_Div_Show #TakeNote");
     
     Noted_Show_Hide();
     
     try {  A.focus();  }catch(err) {  {/*console.log(err.message) ; */}  }
      
   
     
  }

  function Noted_Show_Hide() {
    props.ChangeElm.classList.replace(WNDH, WNDS);
    //  console.log(props.ChangeElm.children[3]);
     props.ChangeElm.children[3].focus()
    WNDH_WNDS();
    Re_SunNum = 1;
  }

  function SUBMIT(e , T) {
    // console.log(T);
    // e.preventDefault();
    setSubNum((P)=> P = P + 1) 
    // console.log(SubNum);
    // SubNum = 1;
    SubNumBigEqulToOne(e , T);
    if (Re_SunNum !== 1) {
     
      props.SaveToLocale_Func( TakeNote_Holder );          /////////////////////////////
    } else {

      // console.log("2");
      props.Func_Store_Edit(TakeNote_Holder, props.ChangeElm);
    }

    alert("Item Added")
  }
  function WNDH_WNDS() {
    return ((WNDS = "Write_Note_Div_Hide"), (WNDH = "Write_Note_Div_Show"));
  }
  function TakeNote(e) {
    setTakeNote_Holder((prew) => (prew = e.target.value));
  }
  function SubNumBigEqulToOne(e , T) {
    [...EditElm].map((E) => (E.style.display = "initial"));
    //console.log(TakeNote_Holder);
    // console.log(T);
    if (SubNum >= 1) {
    //  console.log("@");
      WNDH_WNDS();
      Replce_WN(e);
      // SubNum = 0;
      setSubNum((P)=> P = P-1);
    } else {
      
      // console.log("1");
      Conform(e , T );
    
    }
  }
function Conform(e , Text) {
  let A;
    if(Text !== "Enter"){
      // console.log("1");

      A = window.confirm("You Have Not Submited The Note Are You Sure To Close It")

      if (A=== true) {
      //  console.log("1");
        WNDH_WNDS();
        Replce_WN(e);
        setTakeNote_Holder((prew) => (prew = ""));

        return;
      }else if (A === false){
        setSubNum((P)=> P = P + 1) 
        return;
      }
    };

    WNDH_WNDS();
    Replce_WN(e);
    setTakeNote_Holder((prew) => (prew = ""));

  }
  function Replce_WN(e) {
    //console.log(e);
    if (props.ChangeElm !== undefined) {
      Func_ChangeElm("Yes");
    }
    // Elm = document.getElementsByClassName(WNDH);
    // [...Elm].map((e) => {
    //   e.classList.replace(WNDH, WNDS);
    //   setTakeNote_Holder((prew) => (prew = ""));
    //   console.log(e.children[1].innerHTML);
    // });
    
    Elm = e.nativeEvent.path[1];
    Elm.classList.replace(WNDH, WNDS);
    setTimeout(() => {
      
      alert("Note & ADD Closed");
    }, 200);
    
   // console.log(Elm.classList);
  }

  function Func_ChangeElm(Func) {
    if (Func === "Yes") {
      WNDH_WNDS();
    };
   // console.log(WNDH, WNDS);
    props.ChangeElm.classList.replace(WNDH, WNDS);
    //console.clear()
  }
  return (
    <>
      <div className="Write_Note_Div Write_Note_Div_Hide absolute w-max h-max bg-red-500 border-2 ">
        <h1>{props.Numb}</h1>
       
            <textarea
            name="TakeNote"
            id="TakeNote"
            onChange={TakeNote}
            cols="30"
            value={TakeNote_Holder}
            rows="10"
            onKeyPress={(e)=>{if(e.key === "Enter"){return SUBMIT(e , "Enter") }}}
          />
        
        <button className="XXX" onClick={SubNumBigEqulToOne}>XXX</button>

        <button className="Save"onClick={SUBMIT}  type="submit">
          Save
        </button>
      </div>
    </>
  );
};

Write_Note.propTypes = {
  Numb: PropTypes.number
};
Write_Note.defaultProps = {
  Numb: 1
};

export default Write_Note;
