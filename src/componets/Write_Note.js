import React, { useState } from "react";
import PropTypes from "prop-types";
import { logDOM } from "@testing-library/react";

const Write_Note = (props) => {
  let SubNum = 0;
  let Re_SunNum = 0;
  let WNDS = "Write_Note_Div_Show";
  let WNDH = "Write_Note_Div_Hide";
  let EditElm = document.getElementsByClassName("Edit");
  let Elm = document.getElementsByClassName(WNDH);

  const [TakeNote_Holder, setTakeNote_Holder] = useState("");
  if (props.Run_Show_Hide >= 1) {
    Noted_Show_Hide();
  }

  function Noted_Show_Hide() {
    props.ChangeElm.classList.replace(WNDH, WNDS);
    WNDH_WNDS();
    Re_SunNum = 1;
  }

  function SUBMIT(e) {
    e.preventDefault();
    SubNum = 1;
    SubNumBigEqulToOne();
    if (Re_SunNum !== 1) {
      props.SaveToLocale_Func("", TakeNote_Holder);
    } else {
      props.Func_Store_Edit(TakeNote_Holder, props.ChangeElm);
    }
  }
  function WNDH_WNDS() {
    return (WNDS = "Write_Note_Div_Hide"), (WNDH = "Write_Note_Div_Show");
  }
  function TakeNote(e) {
    setTakeNote_Holder((prew) => (prew = e.target.value));
  }
  function SubNumBigEqulToOne() {
    [...EditElm].map((E) => (E.style.display = "initial"));
    if ((SubNum = 1)) {
      WNDH_WNDS();
      Replce_WN();
      SubNum = 0;
    } else {
      Conform();
    }
  }
  function Conform() {
    if (
      window.confirm(
        "You Have Not Submited The Note Are You Sure To Close It"
      ) === true
    ) {
      WNDH_WNDS();
      Replce_WN();
      setTakeNote_Holder((prew) => (prew = ""));
    }
  }
  function Replce_WN() {
    if (props.ChangeElm !== undefined) {
      Func_ChangeElm("Yes");
    }
    Elm = document.getElementsByClassName(WNDH);
    [...Elm].map((e) => e.classList.replace(WNDH, WNDS));
  }

  function Func_ChangeElm(Func) {
    if (Func === "Yes") {
      WNDH_WNDS();
    }
    props.ChangeElm.classList.replace(WNDH, WNDS);
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
        />
        <button onClick={SubNumBigEqulToOne}>XXX</button>

        <button onClick={SUBMIT} type="submit">
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
