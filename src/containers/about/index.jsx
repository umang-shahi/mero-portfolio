import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import {DiApple, DiAndroid} from "react-icons/di";
import {FaDev, FaDatabase} from "react-icons/fa";


const About = () => {
  const personalDetails = [
    {
      label: "Name:",
      value: "Umang Shahi",
    },
    {
      label: "Age:",
      value: "23",
    },
    {
      label: "Address:",
      value: "Nepal",
    },
    {
      label: "Email:",
      value: "shahiumang700@gmail.com",
    },
    {
      label: "Contact No:",
      value: "+977 9808951308",
    },
  ];

  const jobSummary =
    "Junior full-stack developer with 1 year of experience proficient in both front-end and back-end technologies, contributing to the development and maintenance of web applications.";

  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(-900px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <h3>Full Stack Developer</h3>
          <p>{jobSummary}</p>
        </Animate>
      

      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-900px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <h3 className="personalInformationHeaderText">Personal Information</h3>
        <ul>
          {personalDetails.map((item, i) => (
            <li key={i}>
              <span className="title">{item.label}</span>
              <span className="value">{item.value}</span>
            </li>
          ))}
        </ul>
      </Animate>
        </div>
        <div className="about__content__serviceWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(600px)",
          }}
          end={{
            transform: "translatex(0px)",
          }}
        >
          <div className="about__content__serviceWrapper__innerContent">
          <div><FaDev size={60} color="#3498db"/></div>
          <div><DiAndroid size={60} color="#3498db"/></div>
          <div><FaDatabase size={60} color="#3498db"/></div>
          <div><DiApple size={60} color="#3498db"/></div>

          </div>
         </Animate>
        </div>

        
      </div>
    </section>
  );
};

export default About;
