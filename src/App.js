import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name = "Diwanshu Kumar";
function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(18 41 65)';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">

          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to analyze "mode={mode}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
