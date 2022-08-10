import React, { useState, useEffect, useRef } from "react";
import pht1 from "../../images/pht1.jpg";
import pht2 from "../../images/pht2.jpg";
import pht3 from "../../images/pht3.jpg";
import HALO from "vanta/dist/vanta.halo.min";
import { BIRDSBG, NETBG, HALOBG, CLOUDSBG, WAVESBG } from "../AnimatedBG";

export default function Services() {
  return (
    <div className="services">
      <div className="nomargin">{WAVESBG()}</div>
      <div className="gap"></div>
      <h2> These are my services</h2>
      <ul>
        <li>websites</li>
        <img className="img1" src={pht1} alt="moutain" />
        <li>web apps</li>
        <img className="img1" src={pht2} alt="moutain" />
        <li>updating web apps</li>
        <img className="img1" src={pht3} alt="moutain" />
      </ul>
    </div>
  );
}
