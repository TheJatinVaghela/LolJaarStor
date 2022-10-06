import logo from './logo.svg';
import './App.css';
import MainNav from './componets/MainNav.js'
import Save from './componets/Save.js'
import Noted from './componets/Noted.js'
import Weather from './componets/Weather.js'
import User from './componets/User.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  let [Value, setValue] = useState("MackBook");
  function GetValue (V){
    setValue(prew=> prew = V);
    return Value;
  }
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNav Value={Value} setValue={setValue} ReGetValue={GetValue} />}>
          <Route index element={<Weather TakeValue={Value}/>} />
          <Route path="/User" element={<User />} />
          <Route path="/Saved" element={<Save />} />
          <Route path="/Noted" element={<Noted />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
