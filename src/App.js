import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
//import {
  //BrowserRouter,
  //Routes,
  //Route, // eslint-disable-next-line
  //Link
//} from "react-router-dom";


function App() {
  const[mode, setmode]=useState('dark');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => setAlert(null), 3000);
  }

  const toggleMode =() => {
    if(mode ==='light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    }
    
  }
  return (
    <>
  
  <nav>
</nav>
{/* <BrowserRouter> */}
<Navbar title = "OnlyWords" aboutText = "About us"mode={mode} toggleMode={toggleMode}/>
<Alert alert ={alert}/>
<div className ="container my-3">
{/* <Routes> */}
        {/* {/<Route exact path="/about" element={<About/>}> */}
        
        {/* </Route> */}
         {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Queries"mode={mode}/>}> */}

         <TextForm showAlert={showAlert} heading="Enter Your Queries"mode={mode}/>
          {/* </Route>
        </Routes> */} */}


</div>
   {/* </BrowserRouter> */}
     </>
  );
}

export default App;
