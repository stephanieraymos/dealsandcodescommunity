import React from 'react';
import "./css/styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import DealsCounter from './Home/DealsCounter';
import Deals from './Home/Deals';
// import Deal from './Home/Deal'

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/deals" component={Deals} />
      <Route path="/deals-counter" component={DealsCounter} />
    </Switch>
  </Router>
  );
}

export default App;
