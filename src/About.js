import "./About.css";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="About">
      <Fade duration={2000}>
        <div className="title">About me.</div>
      </Fade>
      <Fade duration={2000}>
        <div className="info">
          감각적인 프론트엔드 개발자가 되고 싶은 최태호입니다.
          <br />
          개발을 단지 기능 하나가 아닌 프로덕트 전체의 시각으로 바라보는 것을
          지향합니다.
          <br />
          매일 어제보다 발전한 사람이 되고 싶어 항상 진취적인 마인드를 가지려고
          노력합니다.
          <br />
          갖고 있는 지식을 토론 및 피드백을 통해 다듬는 것을 중요하게 생각하여
          활발한 의사소통을 추구합니다.
          <br />
          React와 Firebase, Github를 활용해 기획, 개발, 배포 프로세스를 경험을
          가지고 있습니다.
          <br />
          3D 그래픽 API OpenGL, Unity Engine, Unreal Engine을 활용한 게임 개발
          경험을 가지고 있습니다.
        </div>
      </Fade>

      <Fade>
        <br />
        <br />
        <h3>Tech Stack</h3>
        <br />
        <p>
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
          />
        </p>
        <br />
        <br />
        <h3>Used at least once</h3>
        <br />

        <p>
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
          />
          <img
            src={
              "https://img.shields.io/badge/UnrealEngine4-0E1128?style=flat&logo=Unreal Engine&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/Unity-ffffff?style=flat&logo=Unity&logoColor=white"
            }
          />{" "}
          <img
            src={
              "https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white"
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
          />
        </p>
      </Fade>
    </div>
  );
};

export default About;
