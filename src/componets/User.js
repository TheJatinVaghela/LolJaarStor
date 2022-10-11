import React,{ useState , useRef} from 'react'
import PropTypes from 'prop-types'

const User = props => {
  let GetName = JSON.parse(localStorage.getItem("NAME"));
   const input = useRef();
   const BTN = useRef();
   const [Name, setName] = useState("");
   const [StoredName, setStoredName] = useState((GetName)? GetName : "Add User Name");
   function SetValue(e){
    setName((P)=> P = e.target.value);
    setStoredName((P)=> P = e.target.value);
    localStorage.setItem("NAME", JSON.stringify(StoredName));
   };
   function Add_Edit_UserName(e) {
     input.current.classList.replace("UserNameEdit_ADD_HIDE" , "UserNameEdit_ADD_SHOW");
     BTN.current.classList.replace("UserNameEdit_ADD_HIDE" , "UserNameEdit_ADD_SHOW" );
     
   };
   function Close_Add_Edit_UserName(e) {
      input.current.classList.replace("UserNameEdit_ADD_SHOW" , "UserNameEdit_ADD_HIDE" );
      BTN.current.classList.replace("UserNameEdit_ADD_SHOW" , "UserNameEdit_ADD_HIDE" );
   }
  return (
    <>
    <h1 className='HEADERS'>User</h1>
   
    <div className='User'>
    
        <h1 className='Saved_UserName_DIV outline-2 outline-blue-600 text-black h-10'>{StoredName}</h1>
        <button className='Add_Edit_UserName outline-2 outline-black bg-green-500 text-black' onClick={Add_Edit_UserName}>Edit OR ADD UserName</button>
        <input ref={input} className='UserNameEdit_ADD_HIDE text-black' type="text" name="" id="UserName" onChange={SetValue} value={Name}/>
        <button ref={BTN} className='Close_Add_Edit_UserName UserNameEdit_ADD_HIDE outline-2 outline-black bg-red-500 text-black' onClick={Close_Add_Edit_UserName}>Close</button>
    </div >
   
    </>
  )
}

User.propTypes = {}

export default User