import React from "react";
import pht1 from "../../images/pht1.jpg";

export default function Services() {
  return (
    <div className="services">
      <h2> These are my services</h2>
      <ul>
        <li>websites</li>
        <img src={pht1} alt="moutain" />
        <li>web apps</li>
        <img src={pht1} alt="moutain" />
        <li>updating websites</li>
        <img src={pht1} alt="moutain" />
        <li>updating web apps</li>
        <img src={pht1} alt="moutain" />
      </ul>
    </div>
  );
}
