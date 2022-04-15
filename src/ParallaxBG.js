import "./ParallaxBG.css";
import { useEffect, useState } from "react";

const ParallaxBG = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  return (
    <div className="ParallaxBG">
      <div
        className="circle1"
        style={{
          transform: `translateY(-${scrollY * 0.3}px)`,
          left: "10vw",
          top: "30vh",
        }}
      ></div>
      <div
        className="circle2"
        style={{
          transform: `translateY(-${scrollY * 0.5}px)`,
          left: "55vw",
          top: "70vh",
        }}
      ></div>
      <div
        className="circle3"
        style={{
          transform: `translateY(-${scrollY * 0.7}px)`,
          left: "50vw",
          top: "-30vh",
        }}
      ></div>{" "}
      <div
        className="circle1"
        style={{
          transform: `translateY(-${scrollY * 0.4}px)`,
          left: "20vw",
          top: "130vh",
        }}
      ></div>
      <div
        className="circle1"
        style={{
          transform: `translateY(-${scrollY * 0.3}px)`,
          left: "70vw",
          top: "80vh",
        }}
      ></div>
      <div
        className="circle3"
        style={{
          transform: `translateY(-${scrollY * 0.7}px)`,
          left: "40vw",
          top: "190vh",
        }}
      ></div>
      <div
        className="circle1"
        style={{
          transform: `translateY(-${scrollY * 0.3}px)`,
          left: "20vw",
          top: "200vh",
        }}
      ></div>
      <div
        className="circle2"
        style={{
          transform: `translateY(-${scrollY * 0.5}px)`,
          left: "50vw",
          top: "270vh",
        }}
      ></div>
      <div
        className="circle3"
        style={{
          transform: `translateY(-${scrollY * 0.7}px)`,
          left: "40vw",
          top: "330vh",
        }}
      ></div>
      <div
        className="circle1"
        style={{
          transform: `translateY(-${scrollY * 0.3}px)`,
          left: "30vw",
          top: "340vh",
        }}
      ></div>
      <div
        className="circle2"
        style={{
          transform: `translateY(-${scrollY * 0.5}px)`,
          left: "10vw",
          top: "280vh",
        }}
      ></div>
      <div
        className="circle3"
        style={{
          transform: `translateY(-${scrollY * 0.7}px)`,
          left: "50vw",
          top: "280vh",
        }}
      ></div>
    </div>
  );
};

export default ParallaxBG;
