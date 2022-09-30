import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Write_Note = props => {
    let SubNum = 0;
   const [TakeNote_Holder, setTakeNote_Holder] = useState("");
    let Show_Hide = (e)=>{
        let Elm = document.getElementsByClassName("Write_Note_Div_Show");
        if(SubNum === 0){
           
          if(window.confirm("You Have Not Submited The Note Are You Sure To Close It") === true ){

              Elm[0].classList.replace("Write_Note_Div_Show" , "Write_Note_Div_Hide")
          }else{
            return;
          }
        }else if(SubNum >= 1){
             Elm[0].classList.replace("Write_Note_Div_Show" , "Write_Note_Div_Hide")
             SubNum=0
        }
        setTakeNote_Holder(prew => prew = "");
     }
     let TakeNote = (e)=>{
       if(e.target.value.Char <= 0){
        
        if(window.confirm("your Note Is Empty") === true){
            Show_Hide()
          } ;
       }
      setTakeNote_Holder(prew => prew = e.target.value);
      
     }
    let SUBMIT = (e)=>{
       e.preventDefault();
       SubNum = 1;
       console.log("Submited" , SubNum);
       Show_Hide();
       
       props.SaveToLocale_Func("", TakeNote_Holder);
    }
  return (
    <>
    <div className='Write_Note_Div Write_Note_Div_Hide absolute w-max h-max bg-red-500 border-2 '>
        <h1>{props.Numb}</h1>
        <textarea name="TakeNote" id="TakeNote" onChange={TakeNote} cols="30" value={TakeNote_Holder} rows="10"/>
        <button onClick={Show_Hide}>XXX</button>
        
        <button onClick={SUBMIT} type="submit" >Save</button>
    </div>
    </>
  )
}

Write_Note.propTypes = {
Numb : PropTypes.number,
}
Write_Note.defaultProps={
Numb : 1
}

export default Write_Note