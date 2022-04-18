import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import pht1 from "../../images/pht1.jpg";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default function Home() {
  const MyComponent = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          BIRDS({
            el: myRef.current,
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
    return <div ref={myRef}>Foreground content goes here</div>;
  };
  return (
    <>
      {/* {MyComponent()} */}
      <p>This is the home page</p>
      <h3>here are some examples of our builds:</h3>
      <img src={pht1} alt="moutain" />
    </>
  );
}
