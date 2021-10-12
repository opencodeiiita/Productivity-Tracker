import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import { useState } from "react";
function App() {
  const [state, setstate] = useState('0');
  const func =()=>{
    if(state==='0'){
      setstate('240');
    }
    else setstate('0');
  }
  return (
    <Router>
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" ><Dashboard state={state} func={func}></Dashboard></Route>
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    
    </Router>
  );
}
export default App;
