import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
  <div className="App">
    <Router>
      <Route exact path="/">
        <UserProfile />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/create-account">
        <CreateAccount />
      </Route>
    </Router>
  </div>
    
  );
}

export default App;
