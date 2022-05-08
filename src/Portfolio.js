import "./Portfolio.css";
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = ({ setPortfolioActive }) => {
  const portfolioPage = useRef();
  let toggle = true;

  const scrollObserver = useMemo(
    () =>
      new IntersectionObserver(
        () => {
          if (!toggle) {
            setPortfolioActive(true);
            toggle = true;
          } else {
            setPortfolioActive(false);
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
    const { current } = portfolioPage;
    if (current) {
      scrollObserver.observe(current);
    }
  }, [scrollObserver]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Portfolio" id="3" ref={portfolioPage}>
      <Fade duration={2000}>
        <div className="title">PROJECTS.</div>
      </Fade>
      <Fade duration={2000}>
        <div className="yearLine">2022</div>

        {/* <div className="yearContent">
          <img
            className="thumbnail"
            src="taeho-choi-portfolio/Portfolio.png"
            onClick={() =>
              window.open(
                "https://github.com/taeho-choi/taeho-choi-portfolio",
                "_blank"
              )
            }
          ></img>
          <div className="imgDescription">
            <div>
              포트폴리오 웹사이트 <a>#포트폴리오 #프론트엔드 #1인개발</a>
            </div>
            React를 활용하여 만든 공개용 포트폴리오 웹사이트입니다.
            <br />
            <br />
            <a
              href="https://github.com/taeho-choi/taeho-choi-portfolio"
              className="link"
              target="_blank"
            >
              프로젝트 상세보기
            </a>
            <br />
            <br />
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
          </div>
        </div>

        <div className="yearLine"></div> */}

        <div className="yearContent">
          <img
            className="thumbnail"
            src="taeho-choi-portfolio/CanvasProject.png"
          ></img>
          <div className="imgDescription">
            <div>
              태호버스 <a>#메타버스 #웹게임 #1인개발</a>
            </div>
            HTML5 Canvas를 사용하여 만든 플랫포머 메타버스 프로젝트입니다.
            <br />
            {/* Firebase의 Realtime Database와 연동하여 멀티플레이를 구현하였습니다. */}
            <a className="link">현재 개발 중인 프로젝트입니다.</a>
            <br />
            <br />
            <br />
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
                "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"
              }
            />{" "}
          </div>

          <div className="yearLine"></div>

          <img
            className="thumbnail"
            src="taeho-choi-portfolio/EMONG.png"
            onClick={() =>
              window.open(
                "https://scented-handball-29f.notion.site/EMONG-HTML-CSS-JavaScript-React-Firebase-ca486d933dac4e11b1ed97273e7d4567",
                "_blank"
              )
            }
          ></img>
          <div className="imgDescription">
            <div>
              EMONG <a>#리액트 #프론트엔드 #1인개발</a>
            </div>
            HTML5 게임/메타버스를 개발하고 싶어 웹 공부 목적으로 개발한 익명
            감정 공유 웹사이트입니다.
            <br />
            <a
              href="https://scented-handball-29f.notion.site/EMONG-HTML-CSS-JavaScript-React-Firebase-ca486d933dac4e11b1ed97273e7d4567"
              className="link"
              target="_blank"
            >
              프로젝트 상세보기
            </a>
            <br /> <br />
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
                "https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"
              }
            />{" "}
          </div>
        </div>
        <div className="yearLine">2021</div>

        <div className="yearContent">
          <img
            className="thumbnail"
            src="taeho-choi-portfolio/WireHunter.png"
            onClick={() =>
              window.open(
                "https://scented-handball-29f.notion.site/C-Unreal-Engine-4-dfd31d06460d44c8b36ee432dcd1b26f",
                "_blank"
              )
            }
          ></img>
          <div className="imgDescription">
            <div>
              와이어헌터 <a>#게임클라이언트개발 #언리얼엔진 #3인협업</a>
            </div>
            한국공학대학교 게임공학과 졸업작품 프로젝트로, Unreal Engine을
            활용하여 제작한 멀티플레이어 3인칭 슈팅 게임입니다.
            <br />
            <a
              href="https://scented-handball-29f.notion.site/C-Unreal-Engine-4-dfd31d06460d44c8b36ee432dcd1b26f"
              className="link"
              target="_blank"
            >
              프로젝트 상세보기
            </a>
            <br />
            <br />
            <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/UnrealEngine4-0E1128?style=flat&logo=Unreal Engine&logoColor=white" />{" "}
          </div>
        </div>
        <div className="yearLine">2019</div>
        <div className="yearContent">
          <img
            className="thumbnail"
            src="taeho-choi-portfolio/GaeSki.png"
            onClick={() =>
              window.open(
                "https://scented-handball-29f.notion.site/C-OpenGL-8520875365524dc49bf1ceb4222c01bb",
                "_blank"
              )
            }
          ></img>
          <div className="imgDescription">
            <div>
              개스키 <a>#게임클라이언트개발 #컴퓨터그래픽스 #2인협업</a>
            </div>
            강아지가 장애물을 피하며 스키를 타는 레이싱 게임입니다.
            <br />
            C++을 기반으로 그래픽 라이브러리인 OpenGL을 사용하여 개발하였습니다.
            <br />
            <a
              href="https://scented-handball-29f.notion.site/C-OpenGL-8520875365524dc49bf1ceb4222c01bb"
              className="link"
              target="_blank"
            >
              프로젝트 상세보기
            </a>
            <br />
            <br />
            <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/OpenGL-5586A4?style=flat&logo=OpenGL&logoColor=white" />{" "}
          </div>

          <div className="yearLine"></div>

          <img
            className="thumbnail"
            src="taeho-choi-portfolio/FollowingCyborgs.png"
            onClick={() =>
              window.open(
                "https://scented-handball-29f.notion.site/Following-Cyborgs-C-OpenGL-ba44dade262d4f938bd8a3bd6d3ece08",
                "_blank"
              )
            }
          ></img>
          <div className="imgDescription">
            <div>
              Following Cyborgs{" "}
              <a>#게임클라이언트개발 #컴퓨터그래픽스 #1인개발</a>
            </div>
            다른 사이보그들에게 발견 되면 자신을 따라오는 게임입니다.
            <br />
            C++을 기반으로 그래픽 라이브러리인 OpenGL을 사용하여 개발하였습니다.
            <br />
            <a
              href="https://scented-handball-29f.notion.site/Following-Cyborgs-C-OpenGL-ba44dade262d4f938bd8a3bd6d3ece08"
              className="link"
              target="_blank"
            >
              프로젝트 상세보기
            </a>
            <br />
            <br />
            <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/OpenGL-5586A4?style=flat&logo=OpenGL&logoColor=white" />{" "}
          </div>

          <div className="yearLine"></div>

          <img
            className="thumbnail"
            src="taeho-choi-portfolio/LetsSlicePolygon.png"
            onClick={() =>
              window.open(
                "https://scented-handball-29f.notion.site/Let-s-Slice-Polygon-C-OpenGL-133a1eedfd15482ea75c886068654b6e",
                "_blank"
              )
            }
          ></img>
          <div className="imgDescription">
            <div>
              Let's Slice Polygon{" "}
              <a>#게임클라이언트개발 #컴퓨터그래픽스 #1인개발</a>
            </div>
            경로를 따라 날아오는 도형을 마우스 드래그로 잘라내는 게임입니다.
            <br />
            C++을 기반으로 그래픽 라이브러리인 OpenGL을 사용하여 개발하였습니다.
            <br />
            <a
              href="https://scented-handball-29f.notion.site/Let-s-Slice-Polygon-C-OpenGL-133a1eedfd15482ea75c886068654b6e"
              className="link"
              target="_blank"
            >
              프로젝트 상세보기
            </a>
            <br />
            <br />
            <img src="https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white" />{" "}
            <img src="https://img.shields.io/badge/OpenGL-5586A4?style=flat&logo=OpenGL&logoColor=white" />{" "}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Portfolio;
