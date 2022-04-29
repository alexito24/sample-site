import React, { useState, useEffect, useRef } from "react";
import pht1 from "../../images/pht1.jpg";
import HALO from "vanta/dist/vanta.halo.min";
import { BIRDSBG, NETBG, HALOBG, CLOUDSBG, WAVESBG } from "../AnimatedBG";

export default function Services() {
  const MyComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          HALO({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            xOffset: -0.3,
            backgroundColor: 0x662a2a,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
    return (
      <div className="whiteText" ref={myRef}>
        <li>updating websites</li>
        <img src={pht1} alt="moutain" />
      </div>
    );
  };
  return (
    <div className="services">
      <div className="nomargin">{WAVESBG()}</div>
      <div className="gap"></div>
      <h2> These are my services</h2>
      <ul>
        <li>websites</li>
        <img src={pht1} alt="moutain" />
        <li>web apps</li>
        <img src={pht1} alt="moutain" />
        {MyComponent()}
        <li>updating web apps</li>
        <img src={pht1} alt="moutain" />
      </ul>
    </div>
  );
}
