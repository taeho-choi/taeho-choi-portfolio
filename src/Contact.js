import "./Contact.css";
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useMemo } from "react";
import { FaPhoneAlt, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = ({ setContactActive }) => {
  const contactPage = useRef();
  let toggle = true;

  const scrollObserver = useMemo(
    () =>
      new IntersectionObserver(
        () => {
          if (!toggle) {
            setContactActive(true);
            toggle = true;
            console.log("등장");
          } else {
            setContactActive(false);
            toggle = false;
            console.log("디스어피어");
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
    const { current } = contactPage;
    if (current) {
      scrollObserver.observe(current);
    }
  }, [scrollObserver]);

  return (
    <div className="Contact" id="4" ref={contactPage}>
      <Fade duration={1000}>
        <div className="title">CONTACT.</div>
      </Fade>
      <Fade duration={1000}>
        <div className="info">
          <FaGithub className="icon" />　
          <a href="https://github.com/taeho-choi" target="_blank">
            https://taeho-choi.github.com
          </a>
          <br />
          <FaEnvelope />
          　x145789@naver.com
          <br />
          <FaPhoneAlt />
          　010-2737-8623
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
