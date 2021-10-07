import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Deals from "./Deals";

const Home = () => {
  return (
    <div>
      <h1 data-testid="header">Test</h1>
      <Router>
        <Link data-testid="counter-link" to="deals-counter">
          Deals Count
        </Link>
      </Router>
      <Deals />
    </div>
  );
};

export default Home;
