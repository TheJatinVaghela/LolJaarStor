import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import Write_Note from './Write_Note.js'
const Noted = props => {
  let Newin ;
  let Sort_Saved_Noted;
  let Re_Saved_Noted_Get;
  let Perent_Elm ;
  let Swich_Esy_Splice;
  let GetEdit;
  let GetEdit_Id;
 
  let Elm = document.getElementsByClassName("Edit");
  const [ChengingElm, setChengingElm] = useState("") ;
  const [GetST , setGetST] = useState ("")
  const [OBJGetEdit, setOBJGetEdit] = useState("");
  const [Run_Show_Hide, setRun_Show_Hide] = useState(0);

{/*=========================*/}

  let IntialValue;
  let I_D_IntialValue;

  const [MoneyElm, setMoneyElm] = useState("")  ;
  const [ValueMoney, setValueMoney] = useState("")
  const [RE_IntialValue, setRE_IntialValue] = useState({EY:""});
  const [RE_I_D_IntialValue, setRE_I_D_IntialValue] = useState({YE : ""})
  const [Money, setMoney] = useState(1);
   
   

  function HOVER (e){
    if(Number(e.nativeEvent.path[2].children[2].children[1].children[1].innerText) !== 1 ){
   
       I_D_IntialValue = e.nativeEvent.path[3].children[1].children[2].children[1].children[1] ;
       setRE_I_D_IntialValue((P)=> P={YE : I_D_IntialValue});
       
       IntialValue  = Number(e.nativeEvent.path[3].children[1].children[1].children[1].innerText);
       setRE_IntialValue((P)=> P={EY : String(Number(IntialValue) / Number(I_D_IntialValue.innerText))});
   
   return;
   };
       IntialValue  = e.nativeEvent.path[3].children[1].children[1].children[1].innerText
       setRE_IntialValue((P)=> P={EY : IntialValue});
       I_D_IntialValue = e.nativeEvent.path[3].children[1].children[2].children[1].children[1] ;
       setRE_I_D_IntialValue((P)=> P={YE : I_D_IntialValue});

       setRun_Show_Hide((P)=> P = 0);
};
       
   
     
   function Increes(e){
       RE_I_D_IntialValue.YE.innerText = Number(RE_I_D_IntialValue.YE.innerText) + 1;
       setMoney((p)=> p + 1)
       setMoneyElm(e);
       setValueMoney(e.nativeEvent.path[3].children[1].children[1].children[1]);
       SET_Value(e)
   }
   
    
   function Decrees(e){
     if (Number(RE_I_D_IntialValue.YE.innerText) === 1) {
       RE_I_D_IntialValue.YE.innerText = 1;
       e.nativeEvent.path[2].children[1].children[1].innerText = Number(RE_IntialValue.EY) ;
       return
   };
       
       RE_I_D_IntialValue.YE.innerText = Number(RE_I_D_IntialValue.YE.innerText) - 1;
       setMoneyElm(e);
       setValueMoney(e.nativeEvent.path[3].children[1].children[2].children[1].children[1].innerText);
       SET_Value(e)
   };
   
function SET_Value(e){
  e.nativeEvent.path[2].children[1].children[1].innerText = Number(RE_IntialValue.EY) * Number(RE_I_D_IntialValue.YE.innerText) ;
}

{/*=========================*/}

let Saved_Noted_Get = JSON.parse(localStorage.getItem("SAVE"));

if(Saved_Noted_Get !== null){
    Sort_Saved_Noted = Saved_Noted_Get.map((e,index)=>{  e.id = index;  return e });
    Re_Saved_Noted_Get = Sort_Saved_Noted.filter((e)=> e.note || e.note === "");
};
  
let Noted_Get_Delete = (e)=>{
   
    Perent_Elm = e.nativeEvent.path[3]
    Delet_Saved(Number(Perent_Elm.id));
    Perent_Elm.style.display = "none";
  };

  Swich_Esy_Splice =(index)=>{
    Saved_Noted_Get.splice(Number(index), 1);
  }

let Delet_Saved=(index)=>{
    Saved_Noted_Get.filter((e,IN) =>{if (e.id === index){Newin = IN;}} );
    Swich_Esy_Splice(Newin)
    localStorage.setItem("SAVE",JSON.stringify(Saved_Noted_Get));
 };
     
   
let Noted_Get_Edit = (e)=>{
    Chj()
    //console.log(e.nativeEvent.path[3].children[1].children[3].children[3]);
    setChengingElm(prew => prew = e.nativeEvent.path[3].children[1].children[3].children[3])
    GetEdit = e.nativeEvent.path[1].children[3].innerText;
    GetEdit_Id = e.nativeEvent.path[3].id;
    setOBJGetEdit((prew)=> prew = {GetEdit_Id, GetEdit})
    setRun_Show_Hide((p)=> p= p + 1);
    //console.log(Run_Show_Hide);
} 

function Store_Edit (Value , Elm){
  // // console.log(Elm.classList[1].replace("Write_Note_Div_Hide", "Write_Note_Div_Hide"));
  // Elm.classList.replace("Write_Note_Div_Show", "Write_Note_Div_Hide");
  // console.log(Elm.classList);
  //   //Elm.classList.replace("Write_Note_Div_Show", "Write_Note_Div_Hide")
    Get_ObjWhichEditing(Number(GetEdit_Id),Value )
}

function Get_ObjWhichEditing (ID, V ){
   //console.log(Sort_Saved_Noted);
    Sort_Saved_Noted.map((e)=> {if(e.id===Number(OBJGetEdit.GetEdit_Id)){e.note = V; return e }})
    OBJGetEdit.GetEdit = V;
    localStorage.setItem("SAVE",JSON.stringify(Sort_Saved_Noted));
    setGetST(prew => prew = JSON.parse(localStorage.getItem("SAVE")));
    setRun_Show_Hide((p)=> p= 0);
} 

function Chj(){
    //console.log(...Elm);
    [...Elm].map((E)=> E.style.display="none")
}
  return (
     <>
    <h1>NOTE</h1>
     {
       Re_Saved_Noted_Get && Re_Saved_Noted_Get.map((e,index)=>{
          return(
          
          


      <div className='Save_G' key={index} id={e.id} >
            <div className='Save_G_D_1'>
              <img src="https://preview.redd.it/0yi415b12kr11.jpg?auto=webp&s=ee2c39d4db20447bd8178a46e740709aee6c5a82" alt="" />
            </div>
         <div className='Save_G_D_2'>
              <h1>{e.HH}</h1>
              <div>
                  <span>Price = </span><span>{e.PR} </span>
              </div>
              <div className='Save_G_D_2_Div_PM'>
                  <button className='Save_G_D_2_button_1' onMouseOver={HOVER} onClick={Decrees}> - </button>
                      <div className='contents'> 
                        <span> item =</span> <span>1</span>
                      </div>
                  <button className='Save_G_D_2_button_2' onMouseOver={HOVER} onClick={Increes}> + </button>
              </div>
              <div className='Save_G_D_2_Div_DC'>
                  <button className='Save_G_D_2_Div_DC_B_1' onClick={Noted_Get_Delete}>DELETE</button>
                  <button className='Save_G_D_2_Div_DC_B_2'>ChackOut</button>
                  <button className='Edit' onClick={Noted_Get_Edit }>Edit</button>
                  {/*<Write_Note/>*/}
                <Write_Note Run_Show_Hide={Run_Show_Hide}  Func_Store_Edit={Store_Edit} ChangeElm = {ChengingElm}/>
              </div>
              <div className='contents'>
                <span>{e.note}</span>
              </div>
         </div>
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
