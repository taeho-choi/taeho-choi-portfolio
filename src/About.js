import "./About.css";
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useMemo } from "react";

const About = ({ setAboutActive }) => {
  const aboutPage = useRef();
  let toggle = true;

  const scrollObserver = useMemo(
    () =>
      new IntersectionObserver(
        () => {
          if (!toggle) {
            setAboutActive(true);
            toggle = true;
          } else {
            setAboutActive(false);
            toggle = false;
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.3,
        }
      ),
    []
  );

  useEffect(() => {
    const { current } = aboutPage;
    if (current) {
      scrollObserver.observe(current);
    }
  }, [scrollObserver]);

  return (
    <div className="About" id="2" ref={aboutPage}>
      <Fade duration={1000}>
        <div className="title">ABOUT ME.</div>
      </Fade>
      <Fade duration={1000}>
        <div className="me">π¨βπ» μ΅ννΈ (1997.02.26)</div>
        <div className="school">
          νκ΅­κ³΅νλνκ΅(ενκ΅­μ°μκΈ°μ λνκ΅) κ²μκ³΅νκ³Ό μλ£
          <a style={{ color: "rgb(200, 200, 200)", fontWeight: "normal" }}>
            _2022λ 8μ μ‘Έμ μμ 
          </a>
        </div>
        <div className="info">
          β’ μλ‘μ΄ λ°°μμ λμ νλ κ²μ μ’μν©λλ€.
          <br />
          β’ κ²μ κ°λ°κ³Ό λ©νλ²μ€ κ°λ°μ κ΄μ¬μ΄ μμ΅λλ€.
          <br />
          β’ C++, OpenGL, Unreal Engine4λ₯Ό νμ©ν κ²μ ν΄λΌμ΄μΈνΈ κ°λ° κ²½νμ΄
          μμ΅λλ€.
          <br />
          β’ Reactλ₯Ό νμ©ν μΉ νλ‘ νΈμλ κ°λ° κ²½νμ΄ μμ΅λλ€.
          <br />β’ HTML5 Canvas, JavaScriptλ₯Ό νμ©ν μΉ λ©νλ²μ€ κ°λ° κ²½νμ΄
          μμ΅λλ€.
        </div>
      </Fade>
      <Fade duration={2000}>
        <h3>π» Tech Stack</h3>
        <p>
          <img
            src={
              "https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/UnrealEngine4-0E1128?style=flat&logo=Unreal Engine&logoColor=white"
            }
          />{" "}
          <img src="https://img.shields.io/badge/OpenGL-5586A4?style=flat&logo=OpenGL&logoColor=white" />{" "}
          <img
            src={
              "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"
            }
          />{" "}
        </p>
        <br />
        <br />
        <h3>π Used at least once</h3>

        <p>
          <img
            src={
              "https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/UnrealEngine4-0E1128?style=flat&logo=Unreal Engine&logoColor=white"
            }
          />{" "}
          <img src="https://img.shields.io/badge/OpenGL-5586A4?style=flat&logo=OpenGL&logoColor=white" />{" "}
          <img
            src={
              "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/Unity-ffffff?style=flat&logo=Unity&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/Python-3776AB?style=flat&logo=Python&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"
            }
          />{" "}
        </p>
      </Fade>
    </div>
  );
};

export default About;
