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
        <div className="title">Portfolio.</div>
      </Fade>
      <Fade duration={800}>
        <div className="list">
          <Slider {...settings}>
            <div className="portfolio1">
              <div className="name">•　감정 공유 홈페이지 &lt;EMONG&gt;</div>
              <img src="taeho-choi-portfolio/portfolio_emong.png"></img>
              <div className="description">
                본인 입맛대로 사진을 넣어서 캐러셀을 마무리 해주면 되겠지만..!!
                난 처음에 내가 기존에 짜둿던 페이지의 너비, 높이라던지
                스타일링이 달라서 그런지 좌우 버튼과 아래 점 표시 (dots) 가
                안보이거나 이상한 위치에 가있었다. 본인 입맛대로 사진을 넣어서
                캐러셀을 마무리 해주음에 내가 기존에 짜둿던 페이지의 너비,
                높이라던지 스타일링이 달라서 그런지 좌우 버튼과 아래 점 표시
                (dots) 가 안보이거나 이상한 위치에 가있었다. 본인 입맛대로
                사진을 넣어서 캐러셀을 마무리 해주면 되겠지만..!! 난 처음에 내가
                기존에 짜둿던 페이지의 너비, 높이라던지 스타일링이 달라서 그런지
                좌우 버튼과 아래 점 표시 (dots) 가 안보이거나 이상한 위치에
                가있었다. 본인 입맛대로 사진을 넣어서 캐러셀을 마음에 내가
                기존에 짜둿던 페이지의 너비, 높이라던지 스타일링이 달라서 그런지
                좌우 버튼과 아래 점 표시 (dots) 가 안보이거나 이상한 위치에
                가있었다. 본인 입맛대로 사진을 넣어서 캐러셀을 마무리 해주면
                되겠지만..!! 난 처음에 내가 기존에 짜둿던 페이지의 너비,
                높이라던지 스타일링이 달라서 그런지 좌우 버튼과 아래 점 표시
                (dots) 가 안보이거나 이상한 위치에 가있었다. 본인 입맛대로
                사진을 넣어서 캐러셀을 마면 되겠지만..!! 난 처음에 내가 기존에
                짜둿던 페이지의 너비, 높이라던지 스타일링이 달라서 그런지 좌우
                버튼과 아래 점 표시 (dots) 가 안보이거나 이상한 위치에 가있었다.
                본인 입맛대로 사진을 넣어서 캐러셀을 마무리 해주면 되겠지만..!!
                난 처음에 내가 기존에 짜둿던 페이지의 너비, 높이라던지
                스타일링이 달라서 그런지 좌우 버튼과 아래 점 표시 (dots) 가
                안보이거나 이상한 위치에 가있었다.{" "}
              </div>
            </div>
            <div className="portfolio1">
              <div className="name">•　감정 공유 홈페이지 &lt;EMONG&gt;</div>
              <img src="taeho-choi-portfolio/portfolio_emong.png"></img>
              <div className="description">
                본인 입맛대로 사진을 넣어서 캐러셀을 마무리 해주면 되겠지만..!!
                난 처음에 내가 기존에 짜둿던 페이지의 너비, 높이라던지
                스타일링이 달라서 그런지 좌우 버튼과 아래 점 표시 (dots) 가
                안보이거나 이상한 위치에 가있었다. 본인 입맛대로 사진을 넣어서
                캐러셀을 마무리 해주면 되겠지만..!! 난 처음에 내가 기존에 짜둿던
                페이지의 너비, 높이라던지 스타일링이 달라서 그런지 좌우 버튼과
                아래 점 표시 (dots) 가 안보이거나 이상한 위치에 가있었다. 본인
                입맛대로 사진을 넣어서 캐러셀을 마무리 해주면 되겠지만..!! 난
                처음에 내가 기존에 짜둿던 페이지의 너비, 높이라던지 스타일링이
                달라서 그런지 좌우 버튼과 아래 점 표시 (dots) 가 안보이거나
                이상한 위치에 가있었다.{" "}
              </div>
            </div>
          </Slider>
        </div>
      </Fade>
    </div>
  );
};

export default Portfolio;
