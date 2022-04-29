import React from "react";
import { BIRDSBG, NETBG, HALOBG, CLOUDSBG, WAVESBG } from "../AnimatedBG";

export default function Faq() {
  return (
    <>
      <div className="nomargin">{HALOBG()}</div>
      <div className="gap"></div>

      <h2> These are my frequently asked questions </h2>
      <h3>Is this service guarateed?</h3>
      <h4>Yes</h4>
      <h3>Will I be created well?</h3>
      <h4>Always</h4>
      <h3>Is this a quality built?</h3>
      <h4>Yeees!!!!</h4>
      <h3>How do base your price?</h3>
      <h4>Our price is based on the client's needs </h4>
    </>
  );
}
