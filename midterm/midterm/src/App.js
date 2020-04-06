import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Styles
import './App.css';
//Components
import Home from "./containers/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="SiteWrapper">
    <Header />
    <Router>
     <Switch>
       <Route path="/">
         <Home />
       </Route>
     </Switch>
    </Router>
   
   </div>
  );
}

export default App;
