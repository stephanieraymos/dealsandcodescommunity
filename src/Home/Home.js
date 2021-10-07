import React from "react";
import { Link } from "react-router-dom"
import Deals from "./Deals"

const Home = () => {
  return (
    <div>
      <h1 data-testid="header">Test</h1>
      <Link to="deals-counter">Deals Count</Link>
      <Deals />
    </div>
  );
}

export default Home;



