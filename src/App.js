import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
import  Header  from "./Header.js";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Comps from './comps';
import It from './IT';
import Extc from './extc';
import Ecs from './ECS';

// import Register from './Register';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>

    <Route path = "/Login">
                <Login/>
            </Route>

            <Route path = "/Home">
                <Home/>
            </Route>

            <Route path = "/comps">
                <Comps/>
            </Route>

            <Route path = "/IT">
                <It/>
            </Route>

            <Route path = "/extc">
                <Extc/>
            </Route>

            <Route path = "/ECS">
                <Ecs/>
            </Route>
            
           
          
       
   
  </BrowserRouter>
    </div>
  );
}

export default App;

