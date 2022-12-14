import React,{ useState , useEffect , useRef , useMemo } from 'react'
import PropTypes from 'prop-types'
import Write_Note from './Write_Note.js'
const Weather = props => {
   let E ;
   let HH;
   let NO;
   let PR;
   let LOADING  = "LOADING";
   const article = useRef();
   const LoadIng = useRef();
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
      article.current.style.display = "none";
      LoadIng.current.children[0].innerText = "Loading = 10%";
      (Saved !== null)? SAVE_Ary+=[Saved] : SAVE_Ary=null && localStorage.setItem(Saved_Word , JSON.stringify(SAVE_Ary));
        //  console.log(props.TakeValue);
         if (props.TakeValue === undefined) return;
         
            ( async()=>{
            LoadIng.current.children[0].innerText = "Loading = 30%" ; 
          await fetch(`https://api.storerestapi.com/products`)
          .then(response =>  response.json())
              .then(response => {  {/*console.log(response); */}return Arr=response.data })
              .then(()=>   setProductArry((prew)=> prew = Arr)    )
              .then(()=> {
                  article.current.style.display = "grid";
                  LoadIng.current.style.display = "none";
                })
              .catch(err => {
                console.log(err);
                article.current.style.display = "none";
                LoadIng.current.children[0].innerText =  String(err) +  "  (1)=> Chack your network , (2) => API is not working "
              })
              //console.log(Arr);
          })();
        
         

        // LoadIng.current.style.display = "none";
        // article.current.style.display = "grid";
        
        // if(article.current.children < 1){
        //   console.log("hey");
        // }

     }, [])
   
     let Show_Hide = (e)=>{
       let Elm = document.getElementsByClassName("Write_Note_Div_Show");
          if(Elm[0]){
            alert("One Add-Note Is Open Close That One To Open Other ")
            return
          }
       if(e.nativeEvent.path[1].children[5].classList[1] === "Write_Note_Div_Hide"){
         e.nativeEvent.path[1].children[5].classList.replace("Write_Note_Div_Hide" , "Write_Note_Div_Show");
       }
       
        Elm[0].children[1].focus();
        E = e;
        Get_HH_NO_Value(E)
    }
    function Get_HH_NO_Value (E){
      HH = E.nativeEvent.path[1].children[1].innerText;
      NO = E.nativeEvent.path[1].children[0].src;
     PR = E.nativeEvent.path[1].children[2].children[1].innerText;
      
    }
    let SaveToLocale = (e)=>{
      if(e === undefined){return}
      Get_HH_NO_Value(e);
      inside_Save()

      alert("Item Added")
      
   };
     
    function inside_Save (Note){
      infoOBJ={
         HH : HH,
         NO : NO,
         PR:PR,
         RE: Mt,
         iv: "1",
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
         <h1 className='HEADERS'>Store</h1>
         <div className='LOADING' ref={LoadIng}>
             <h1 className='LOADING_H1'>{LOADING}</h1>
         </div>
         <article className='Ar_grid' ref={article}>
    {ProductArry && ProductArry.map((E,index)=> {
      return (
       
        <div key={index} className='grid outline-2 outline-red-400'>
          <img src="https://preview.redd.it/0yi415b12kr11.jpg?auto=webp&s=ee2c39d4db20447bd8178a46e740709aee6c5a82" alt="" />
          <h1>{E.title}</h1>

          <div className='flex justify-center'>
              <span className='Price text-center'>Price =</span><span className='Price text-center'>{E.price}</span>
          </div>

          <button onClick={Show_Hide} className='Note_Add Cart bold bg-red-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Note & Add Cart</button>
          <button  onClick={SaveToLocale} className='Add_Cart bold bg-red-300 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Add Cart</button>
          <Write_Note className='' Numb={Mt} SaveToLocale_Func={inside_Save} />
      </div>
      )
    })}
          </article>

        
       
    </>
  )
}

Weather.propTypes = {}

export default Weather