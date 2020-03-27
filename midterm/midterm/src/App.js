import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Styles
import './App.css';
import Home from "./containers/Home";

function App() {
  return (
    <div className="SiteWrapper">
    {/* <Header /> */}
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
