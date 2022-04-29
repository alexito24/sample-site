import React from "react";
import { BIRDSBG, NETBG, HALOBG, CLOUDSBG, WAVESBG } from "../AnimatedBG";

export default function About() {
  return (
    <>
      <div className="nomargin">{BIRDSBG()}</div>
      <div className="gap"></div>

      <h2>this is the about section</h2>
      <p>We are a small family owned company</p>
    </>
  );
}
