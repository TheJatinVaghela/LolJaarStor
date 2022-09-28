import logo from './logo.svg';
import './App.css';
import MainNav from './componets/MainNav.js'
import Save from './componets/Save.js'
import Noted from './componets/Noted.js'
import Weather from './componets/Weather.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={ <MainNav /> } >
       <Route path="/" element={ <Weather/> } />
          <Route path="Save" element={<Save/>} />
          <Route path="Noted" element={<Noted/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
