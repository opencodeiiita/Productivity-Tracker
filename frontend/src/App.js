import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Footer from "./component/Footer";
import Profile from "./pages/profile";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
