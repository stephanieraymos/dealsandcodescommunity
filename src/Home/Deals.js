import React from 'react';
import Deal from "./Deal"
import bottle from "../img/bottle.jpg";
import mat from "../img/mat.jpg";
import ss from "../img/ss.jpg";
import ts from "../img/ts.jpg";

const DealsComp = () => {
    return (
      <>
        <h1 className="header">Deals</h1>
        <div className="deal-container">
          <Deal
            link="Amazon"
            image={bottle}
            title="Water Bottle"
            admin="Stephanie Raymos"
            discount={50}
          />
          <Deal
            link="Link"
            image={mat}
            title="Yoga Mat"
            admin="Audie Raymos"
            discount={60}
          />
          <Deal
            link="Link"
            image={ss}
            title="Kitchen Spatula Set"
            admin="Stephanie Raymos"
            discount={75}
          />
          <Deal
            link="Link"
            image={ts}
            title="Kids toy tractor set"
            admin="Stephanie Raymos"
            discount={65}
          />
        </div>
      </>
    );
  };
  export default DealsComp;