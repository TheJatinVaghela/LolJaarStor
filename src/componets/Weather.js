import React,{ useState , useEffect } from 'react'
import PropTypes from 'prop-types'
import Write_Note from './Write_Note.js'
const Weather = props => {
   let E ;
   let HH;
   let NO;
   const [Saved_Word, setSaved_Word] = useState("SAVE");
   let Arr = [];
   const [ProductArry, setProductArry] = useState([])
   let Saved = JSON.parse(localStorage.getItem(Saved_Word));
   let SAVE_Ary=[];
   
   let Mt = 1;
   let infoOBJ={
      h1 : "One H!",
      NO : "NOP!",
      RE: Mt,
      
   };
   
    useEffect(() => {
         (Saved !== null)? SAVE_Ary+=[Saved] : SAVE_Ary=null && localStorage.setItem(Saved_Word , JSON.stringify(SAVE_Ary));
        
         if (props.TakeValue === undefined) return;
      //  ( async()=>{
      //  const options = {
      //       method: 'GET',
      //       headers: {
      //          'X-RapidAPI-Key': '80878a924amshac9807be2633669p16bf90jsn7b32fc7488bc',
      //          'X-RapidAPI-Host': 'target1.p.rapidapi.com'
      //       }
      //    };
      //   
      //   await fetch(`https://target1.p.rapidapi.com/auto-complete?q=${props.TakeValue || `mackBook`}%20air`, options)
      //       .then(response =>  response.json())
      //       .then(response => {  {/*console.log(response); */}return Arr=response.suggestions })
      //       .catch(err => console.error(err));
      //        //console.log(Arr);
      //       setProductArry((prew)=> prew = Arr)        
      // })();
      setProductArry((prew)=> prew = [
           {
             "label": "macbook air charger",
             "location": "/s?searchTerm=macbook+air+charger&category=0|All|matchallpartial|all%20categories"
           },
           {
             "label": "macbook air charger cord",
             "location": "/s?searchTerm=macbook+air+charger+cord&category=0|All|matchallpartial|all%20categories"
           },
           {
             "label": "macbook air case",
             "location": "/s?searchTerm=macbook+air+case&category=0|All|matchallpartial|all%20categories"
           },
           {
             "label": "macbook air usb adapter",
             "location": "/s?searchTerm=macbook+air+usb+adapter&category=0|All|matchallpartial|all%20categories"
           },
           {
             "label": "macbook air",
             "location": "/s?searchTerm=macbook+air&category=0|All|matchallpartial|all%20categories"
           },
           {
             "label": "macbook air 13 case",
             "location": "/s?searchTerm=macbook+air+13+case&category=0|All|matchallpartial|all%20categories"
           },
           {
             "label": "macbook air charger type c",
             "location": "/s?searchTerm=macbook+air+charger+type+c&category=0|All|matchallpartial|all%20categories"
           },
           {
             "label": "apple macbook air charger",
             "location": "/s?searchTerm=apple+macbook+air+charger&category=0|All|matchallpartial|all%20categories"
           }
         ]
        )
     }, [props.TakeValue])
   
     let Show_Hide = (e)=>{
        let Elm = document.getElementsByClassName("Write_Note_Div_Hide");
        if(Elm.length === 0){ return alert("One Note Is Open Cindly Close That To Open Another") }
        Elm[0].classList.replace("Write_Note_Div_Hide" , "Write_Note_Div_Show")
        E = e;
        Get_HH_NO_Value(E)
    }
    function Get_HH_NO_Value (E){
      HH = E.nativeEvent.path[1].children[1].innerText;
      NO = E.nativeEvent.path[1].children[0].src;
    }
    let SaveToLocale = (e)=>{
      if(e === undefined){return}
      Get_HH_NO_Value(e);
      inside_Save()
   };
     
    function inside_Save (Note){
      infoOBJ={
         HH : HH,
         NO : NO,
         RE: Mt,
         note: Note,
      };
       Saving();
      };

     function Saving (){
         let Saved = JSON.parse(localStorage.getItem(Saved_Word));
       if (Saved !== null ) {
           SAVE_Ary=Saved;
           SAVE_Ary.push(infoOBJ);
           localStorage.setItem(Saved_Word , JSON.stringify(SAVE_Ary))
       }else{
           SAVE_Ary=[infoOBJ];
           localStorage.setItem(Saved_Word , JSON.stringify(SAVE_Ary))
       };
     }

    
      
      return (
         <>
         <article className='flex gap-5 flex-wrap'>
    {ProductArry && ProductArry.map((E,index)=> {
      return (
        
         <div key={index} className="w-20 h-30 isolate inline-flex flex-wrap flex-row">
              <img className='z-0' src={`https://th.bing.com/th/id/OIP.T3hrhEBcsVYNUJ-_5t1oKgHaHa?pid=ImgDet&rs=1`} alt="IMG" />
              <h3>{E.label}</h3>
              <button className='' onClick={SaveToLocale}>Save</button>
              <button className="Comp_Note" onClick={Show_Hide}>Note</button>
              <Write_Note className='' Numb={Mt} SaveToLocale_Func={inside_Save} />
       
         </div>
       
      )
    })}
          </article>
        {/* <div  className="w-20 h-20 isolate">
              <img className='z-0' src={`https://th.bing.com/th/id/OIP.T3hrhEBcsVYNUJ-_5t1oKgHaHa?pid=ImgDet&rs=1`} alt="IMG" />
              <h3>eheyna</h3>
              <button className='' onClick={SaveToLocale}>Save</button>
              <button className="Comp_Note" onClick={Show_Hide}>Note</button>
              <Write_Note className='' Numb={Mt} SaveToLocale_Func={inside_Save} />
         </div>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        <div  className="w-20 h-20 isolate">
              <img className='z-0' src={`https://th.bing.com/th/id/OIP.T3hrhEBcsVYNUJ-_5t1oKgHaHa?pid=ImgDet&rs=1`} alt="IMG" />
              <h3>BOOOOOOy</h3>
              <button className='' onClick={SaveToLocale}>Save</button>
              <button className="Comp_Note" onClick={Show_Hide}>Note</button>
              <Write_Note className='' Numb={Mt} SaveToLocale_Func={inside_Save}  />
         </div> */}

     {/* <div>
        <h1>{Mt}</h1>
        <button onClick={SaveToLocale}>Save</button>
        <button className="Comp_Note" onClick={Show_Hide}>Note</button>
     </div>
    
    
     <Write_Note Numb={Mt} SaveToLocale_Func={SaveToLocale} /> */}
    </>
  )
}

Weather.propTypes = {}

export default Weather