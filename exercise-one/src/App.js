import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Styles
import './App.css';

import ArticleListing from './pages/ArticleListing';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/article/:id">
            <Article/>
          </Route>
          <Route path="/">
            <ArticleListing/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
