import React,{ useState , useLayoutEffect , useRef} from 'react'
import PropTypes from 'prop-types'



const Save = props => {
  let P;

  let Newin ;
  let Perent_Elm ;
  let Sort_Saved_Get;
  let Re_Saved_Get;
  let Swich_Esy_Splice ;
  let IntialValue;
  let I_D_IntialValue;
  
  let pr;
  let IV;
  let ID;

  const [ReloadCount, setReloadCount] = useState(0) 

  let Saved_Get = JSON.parse(localStorage.getItem("SAVE"));

  const [MoneyElm, setMoneyElm] = useState("")  ;
  const [ValueMoney, setValueMoney] = useState("")
  const [RE_IntialValue, setRE_IntialValue] = useState({EY:""});
  const [RE_I_D_IntialValue, setRE_I_D_IntialValue] = useState({YE : ""})
  const [Money, setMoney] = useState(1);

if(Saved_Get !== null){
    Sort_Saved_Get = [...Saved_Get];
    Sort_Saved_Get.map((e,index)=> {if(e){ e["id"]=index; return e }} );
    Re_Saved_Get = Saved_Get.filter((e)=> e.note === undefined || "");
}
   
let Saved_Get_Delete = (e)=>{
  setReloadCount((P)=> P = P+1);
   
    Perent_Elm = e.nativeEvent.path[3]
    Delet_Saved(Number(Perent_Elm.id));
    // setReloadCount((P)=> P = P-1);
    // Perent_Elm.style.display = "none";
};

Swich_Esy_Splice =(index)=> {
    Saved_Get.splice(Number(index), 1);
}
    
let Delet_Saved=(index)=>{
    Saved_Get.filter((e,IN) =>{if (e.id === index){Newin = IN;}} );
    Swich_Esy_Splice(Newin)
    localStorage.setItem("SAVE",JSON.stringify(Saved_Get));
}
  
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

function MouseLeave(e) {
  
  //console.log("Leave");
//console.log( e.nativeEvent.path)
  
  e.nativeEvent.path.forEach((e) => {
    if(e.className === "Save_G"){
        //  console.log(e);
         FOR_MouseLeave(e)
       }
  });
 //console.log(pr , IV , ID);
  // console.log(Re_Saved_Get);
  // console.log(Saved_Get);
  Saved_Get.filter((e)=>{
    if(e.id === Number(ID)){
        e.PR = pr;
        e.iv= (IV)? IV : "1";
     }
    return e
  });
  //console.log(Saved_Get);
  localStorage.setItem("SAVE",JSON.stringify(Saved_Get));
  
}
function FOR_MouseLeave(e) {
  pr = e.children[1].children[1].children[1].innerText;
  IV = e.children[1].children[2].children[1].children[1].innerText;
  ID = e.id;
//  console.log(pr , IV, ID);
  return pr , IV, ID
} 


  return (
    <>
       <h1>SAVE</h1>    
       {
        Re_Saved_Get && Re_Saved_Get.map((e, index)=>{
         return (
       <div className='Save_G' key={e.id} id={e.id} onMouseLeave={MouseLeave}>
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
                        <span> item =</span> <span>{e.iv}</span>
                      </div>
                  <button className='Save_G_D_2_button_2' onMouseOver={HOVER} onClick={Increes}> + </button>
              </div>
              <div className='Save_G_D_2_Div_DC'>
                  <button className='Save_G_D_2_Div_DC_B_1' onClick={Saved_Get_Delete}>DELETE</button>
                  <button className='Save_G_D_2_Div_DC_B_2'>ChackOut</button>
              </div>
         </div>
      </div>
        )

        }
        )
      }
        
       
         
       
      
    </>
  )
}

Save.propTypes = {}

export default Save