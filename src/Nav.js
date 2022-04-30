import "./Nav.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Nav = ({ homeActive, portfolioActive, aboutActive, contactActive }) => {
  const [scrollY, setScrollY] = useState(0);
  const [visibility, setVisibility] = useState(false);

  const handleFollow = (e) => {
    setScrollY(window.pageYOffset);

    if (scrollY > 200) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }

    if (scrollY > 100) {
      document.getElementsByClassName("scrollIcon")[0].classList.remove("on");
    } else {
      document.getElementsByClassName("scrollIcon")[0].classList.add("on");
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
    <div className="Nav">
      <Link to="1" spy={true} smooth={true}>
        <a
          className={visibility ? "visible" : "unvisible"}
          style={homeActive ? { textDecoration: "underline" } : {}}
        >
          HOME
        </a>
      </Link>
      <Link to="2" spy={true} smooth={true}>
        <a
          className={visibility ? "visible" : "unvisible"}
          style={
            !homeActive && aboutActive ? { textDecoration: "underline" } : {}
          }
        >
          ABOUT
        </a>
      </Link>
      <Link to="3" spy={true} smooth={true}>
        <a
          className={visibility ? "visible" : "unvisible"}
          style={
            !homeActive && !aboutActive && !contactActive && portfolioActive
              ? { textDecoration: "underline" }
              : {}
          }
        >
          PROJECTS
        </a>
      </Link>
      <Link to="4" spy={true} smooth={true}>
        <a
          className={visibility ? "visible" : "unvisible"}
          style={
            !homeActive && !aboutActive && !portfolioActive && contactActive
              ? { textDecoration: "underline" }
              : {}
          }
        >
          CONTACT
        </a>
      </Link>
    </div>
  );
};
export default Nav;
