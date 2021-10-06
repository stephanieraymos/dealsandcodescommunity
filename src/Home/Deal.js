import React from 'react';

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

export default Deal;