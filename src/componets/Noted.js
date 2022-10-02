import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import Write_Note from './Write_Note.js'
const Noted = props => {
  let Sort_Saved_Noted;
  let Re_Saved_Noted_Get;
  let Perent_Elm ;
  let Saved_Noted_Get_lenght;
  let Swich_Esy_Splice;
  let GetEdit;
  let GetEdit_Id;
  let Elm = document.getElementsByClassName("Edit");
  const [ChengingElm, setChengingElm] = useState("") ;
  const [GetST , setGetST] = useState ("")
  const [OBJGetEdit, setOBJGetEdit] = useState("");

  const [Run_Show_Hide, setRun_Show_Hide] = useState(0);
  let Saved_Noted_Get = JSON.parse(localStorage.getItem("SAVE"));
  if(Saved_Noted_Get !== null){
    Sort_Saved_Noted = Saved_Noted_Get.map((e,index)=>{  e.id = index;  return e });
    Re_Saved_Noted_Get = Sort_Saved_Noted.filter((e)=> e.note || e.note === "");
  };
  
  let Noted_Get_Delete = (e)=>{
    Perent_Elm = e.nativeEvent.path[1]
    Delet_Saved(Number(Perent_Elm.id));
    Perent_Elm.style.display = "none";
  };

  Swich_Esy_Splice =(index)=>Saved_Noted_Get.splice(Number(index), 1);

  let Delet_Saved=(index)=>{
     Saved_Noted_Get_lenght = Saved_Noted_Get.lenght;
     switch (Saved_Noted_Get_lenght) {
    case Saved_Noted_Get_lenght=== 1:{
      index = 0;
      Swich_Esy_Splice(index);
    }
    break;
    case Saved_Noted_Get_lenght === index:{
    index= Saved_Noted_Get_lenght -1;
    Swich_Esy_Splice(index);
    }
    break;
    case Saved_Noted_Get_lenght < index:{
    index= Saved_Noted_Get_lenght -1;
    Swich_Esy_Splice(index);
    }
    break;
    default:Swich_Esy_Splice(index);
    break;
   }

   localStorage.setItem("SAVE",JSON.stringify(Saved_Noted_Get));
  };
     
   
  let Noted_Get_Edit = (e)=>{
    Chj()
    setChengingElm(prew => prew = e.nativeEvent.path[1].children[7])
    GetEdit = e.nativeEvent.path[1].children[3].innerText;
    GetEdit_Id = e.nativeEvent.path[1].children[4].innerText;
   setOBJGetEdit((prew)=> prew = {GetEdit_Id, GetEdit})
   setRun_Show_Hide(Run_Show_Hide + 1);
  } 

  function Store_Edit (Value , Elm){
    Elm.classList.replace("Write_Note_Div_Show", "Write_Note_Div_Hide")
     Get_ObjWhichEditing(Number(GetEdit_Id),Value )
  }

  function Get_ObjWhichEditing (ID, V ){
    console.log(Sort_Saved_Noted);
    Sort_Saved_Noted.map((e)=> {if(e.id===Number(OBJGetEdit.GetEdit_Id)){e.note = V; return e }})
    OBJGetEdit.GetEdit = V;
    localStorage.setItem("SAVE",JSON.stringify(Sort_Saved_Noted));
    setGetST(prew => prew = JSON.parse(localStorage.getItem("SAVE")));
  } 

  function Chj(){
    console.log(...Elm);
     [...Elm].map((E)=> E.style.display="none")
  }
  return (
     <>
    <h1>NOTE</h1>
     {
       Re_Saved_Noted_Get && Re_Saved_Noted_Get.map((e,index)=>{
          return(
            <div key={index} id={e.id}>
               <span>{e.HH}</span> // <span>{e.NO}</span> // <span>{e.RE}</span> // <span>{e.note}</span>// <span>{e.id}</span>
               <button onClick={Noted_Get_Delete}>Delete</button>
               <button className='Edit' onClick={Noted_Get_Edit }>Edit</button>
                <Write_Note Run_Show_Hide={Run_Show_Hide}  Func_Store_Edit={Store_Edit} ChangeElm = {ChengingElm}/>
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
