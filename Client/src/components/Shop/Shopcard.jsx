import React from "react";
import "./shop.css";

export const Shopcard = ({ image, title, subtitle, desc, price }) => {
  return (
    <div>
      <img style={{ width: "95%", height: "50%" }} src={image[0]} />
      <p style={{ marginTop: "50px", fontFamily: 'monospace' }}>{title}</p>
      <p className="subtitle">{subtitle}</p>
      <p>{desc}</p>
      <p>${price}</p>
    </div>
  );
};
