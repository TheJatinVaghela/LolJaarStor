import React from 'react'
import PropTypes from 'prop-types'

const Noted = props => {
  let Sort_Saved_Noted;
  let Re_Saved_Noted_Get;
  let Perent_Elm ;
  let Saved_Noted_Get_lenght;
  let Swich_Esy_Splice;
  let Saved_Noted_Get = JSON.parse(localStorage.getItem("SAVE"));
  if(Saved_Noted_Get !== null){
    Sort_Saved_Noted = Saved_Noted_Get.map((e,index)=>{
      e.id = index;
      return e
    })
    Re_Saved_Noted_Get = Sort_Saved_Noted.filter((e)=> e.note || e.note === "");
  };
  console.log(Re_Saved_Noted_Get);

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
      default:{
        Swich_Esy_Splice(index);
      }
        break;
     }

    // (Saved_Noted_Get.lenght === Number(index))? Number(index - 1) : Number(index);
    //  Saved_Noted_Get.splice(Number(index), 1);
    //  console.log(Saved_Noted_Get);
     localStorage.setItem("SAVE",JSON.stringify(Saved_Noted_Get));
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
