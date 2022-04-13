import "./TopButton.css";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const TopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    console.log("ScrollY is ", scrollY);
  }, [scrollY]);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
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
    <div className="TopButton">
      <button
        className={visibility ? "visible" : "unvisible"}
        onClick={scroll.scrollToTop}
      >
        <AiOutlineVerticalAlignTop />
      </button>
    </div>
  );
};

export default TopButton;
