import React from "react";
import { SocialIcon } from "react-social-icons";
import { BIRDSBG, NETBG, HALOBG, CLOUDSBG, WAVESBG } from "../AnimatedBG";

export default function Contact() {
  return (
    <>
      <div className="nomargin">{NETBG()}</div>
      <div className="gap"></div>
      <h3> our phone number : 000 000 0000 </h3>
      <h3> our email : email@email.email </h3>
      <h3>
        {" "}
        our socials: <SocialIcon url="https://github.com/alexito24" />{" "}
      </h3>
    </>
  );
}
