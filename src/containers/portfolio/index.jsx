import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 1,
    name: "Login/Register",
    image: ImageOne,
    link: "https://github.com/umang-shahi/loginregister",
  },
  {
    id: 2,
    name: "ReactEcommerce",
    link: "https://github.com/umang-shahi/Reacttutorial",
    image: ImageThree,
  },
  {
    id: 3,
    name: "BackendMongodb",
    image: ImageFour,
    link: "https://github.com/umang-shahi/backend",
  }
];

const Portfolio = () => {

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                <p>{item.name}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button>Visit</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
