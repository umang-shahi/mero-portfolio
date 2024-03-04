import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import Typewriter from "./typewriter";
import Img from "../../images/myphoto.jpg"

function Home() {
  const navigate = useNavigate();

  const handleNavigateToContactMe = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="img">
      <img src={Img} alt="umang"/>
      </div>
      <div className="home__text-wrapper">
        <Typewriter text="Salutations,I'm Umang an adept FullStack developer." />
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMe}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
}

export default Home;
