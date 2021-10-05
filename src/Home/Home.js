import React from "react";
import { render } from "react-dom";
import bottle from "../img/bottle.jpg";
import mat from "../img/mat.jpg";
import ss from "../img/ss.jpg";
import ts from "../img/ts.jpg";

const Deal = ({ link, image, title, admin, discount }) => {
    const moreInfo = () => {
        // console.log("more info");
        window.location.href = "#";
    }
  return (
    <section className="deal">
      <p>{link}</p>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Total discount: {discount}%</p>
      <button onClick={ () => moreInfo()}>More info</button>
      <p>{admin}</p>
    </section>
  );
};

const DealsComp = () => {
  return (
    <>
      <h1 className="header">Deals:</h1>
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

render(<DealsComp />, document.getElementById("root"));

export default DealsComp;
