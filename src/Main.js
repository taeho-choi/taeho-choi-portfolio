import "./Main.css";
import { useEffect, useRef, useMemo } from "react";

const Main = ({ setHomeActive }) => {
  const mainPage = useRef();
  let toggle = false;

  const scrollObserver = useMemo(
    () =>
      new IntersectionObserver(
        () => {
          if (!toggle) {
            setHomeActive(true);
            toggle = true;
          } else {
            setHomeActive(false);
            toggle = false;
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.35,
        }
      ),
    []
  );

  useEffect(() => {
    const { current } = mainPage;
    if (current) {
      scrollObserver.observe(current);
    }
  }, [scrollObserver]);

  return (
    <div className="Main" id="1" ref={mainPage}>
      <div className="myPhoto">
        <img src="taeho-choi-portfolio/myPhoto.png" />
      </div>
      <div className="subTitle">
        게임과 웹을 개발하는 <a>최태호</a> 입니다.
      </div>

      <div className="wrap">
        <div className="title">
          From "Hello, World!"
          <br />
          to Here
        </div>
      </div>

      <img className="scrollIcon on" src="taeho-choi-portfolio/scroll.png" />
    </div>
  );
};

export default Main;
