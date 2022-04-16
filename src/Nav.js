import "./Nav.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

const Nav = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleFollow = (e) => {
    setScrollY(window.pageYOffset);

    if (scrollY > 200) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }

    if (scrollY > 1242) {
      setCurrentPage(3);
    } else if (scrollY > 358) {
      setCurrentPage(2);
    } else {
      setCurrentPage(1);
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
          style={
            currentPage === 1
              ? { textDecoration: "underline", color: "rgb(192, 255, 55)" }
              : {}
          }
        >
          HOME
        </a>
      </Link>
      <Link to="2" spy={true} smooth={true}>
        <a
          className={visibility ? "visible" : "unvisible"}
          style={
            currentPage === 2
              ? { textDecoration: "underline", color: "rgb(192, 255, 55)" }
              : {}
          }
        >
          ABOUT
        </a>
      </Link>
      <Link to="3" spy={true} smooth={true}>
        <a
          className={visibility ? "visible" : "unvisible"}
          style={
            currentPage === 3
              ? { textDecoration: "underline", color: "rgb(192, 255, 55)" }
              : {}
          }
        >
          PORTFOLIO
        </a>
      </Link>
    </div>
  );
};
export default Nav;
