import React, { useState, useEffect, useRef } from "react";

import pht2 from "../../images/pht2.jpg";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import { BIRDSBG, NETBG, HALOBG, DOTSBG, WAVESBG } from "../AnimatedBG";

export default function Home() {
  return (
    <>
      <div className="nomargin">{DOTSBG()}</div>
      <div className="gap"></div>
      <h3>here are some examples of our builds:</h3>
      <img src={pht2} alt="moutain" />
    </>
  );
}
