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
        <div className="me">👨‍💻 최태호 (1997.02.26)</div>
        <div className="school">
          한국공학대학교(前한국산업기술대학교) 게임공학과 수료
          <a style={{ color: "rgb(200, 200, 200)", fontWeight: "normal" }}>
            _2022년 8월 졸업 예정
          </a>
        </div>
        <div className="info">
          • 새로운 배움에 도전하는 것을 좋아합니다.
          <br />
          • 게임 개발과 메타버스 개발에 관심이 있습니다.
          <br />
          • C++, OpenGL, Unreal Engine4를 활용한 게임 클라이언트 개발 경험이
          있습니다.
          <br />
          • React를 활용한 웹 프론트엔드 개발 경험이 있습니다.
          <br />• HTML5 Canvas, JavaScript를 활용한 웹 메타버스 개발 경험이
          있습니다.
        </div>
      </Fade>
      <Fade duration={2000}>
        <h3>💻 Tech Stack</h3>
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
        <h3>🔎 Used at least once</h3>

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
