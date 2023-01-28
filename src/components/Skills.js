import daIcon from "../assets/img/da_icon.png";
import webDevIcon from "../assets/img/web_dev_icon1.png";
import TableauIcon from "../assets/img/skill/Tableau1.png";
import powerbiIcon from "../assets/img/skill/powerbi.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import * as React from 'react';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <div className="skill grid-container">
                            <div className="grid-item">
                                <img src={webDevIcon} />
                                <h5>Web Development</h5>
                            </div>
                            
                            <div className="grid-item">
                                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"  >
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" alt="Java"  />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="Spring" />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg" alt="FastAPI" />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS" />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="CSS" />
                                </div>

                                </Carousel>

                            </div>

                            <div className="grid-item">
                                <img src={daIcon} />
                                <h5>Data Science</h5>
                            </div>

                            <div className="grid-item">
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"  >
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Python"  />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="SQL" />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" />
                                </div>
                                <div className="item">
                                    <img src={TableauIcon} alt="Tableau" />
                                </div>
                                <div className="item">
                                    <img src={powerbiIcon} alt="PowerBI" />
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt="pandas"/>
                                </div>
                                <div className="item">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="numpy"/>
                                </div>
                                </Carousel>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
