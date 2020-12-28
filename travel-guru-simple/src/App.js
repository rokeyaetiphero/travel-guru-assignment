import './App.css';
import Header from './Components/Header/Header';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Fontpage from './Components/Fontpage/Fontpage';


function App() {
  return (
    <div className="App">
      <Header></Header>
      
    </div>
  );
}

export default App;
