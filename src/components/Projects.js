import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { WebProjectCard } from "./WebProjectCard";
import projImg1 from "../assets/img/project/course_reg.PNG";
import projImg2 from "../assets/img/project/flash_sale.png";
import projImg3 from "../assets/img/project/api.png";
import projImg4 from "../assets/img/project/meijer.PNG";
import projImg5 from "../assets/img/project/ts.PNG";
import projImg6 from "../assets/img/project/vaccine.PNG"
import tsPDF from "../assets/img/project/ts.pdf"
import meijerPDF from "../assets/img/project/meijer.pdf"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Course Registration System",
      description: `Frontend: React; Backend: Sping Boot; Database: MySQL`,
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Flash-Sale System",
      description: "Basic Framework: Spring Boot; Message Oriented Middleware: RocketMQ; In-Memory Cache: Redis; Database: MySQL ",
      imgUrl: projImg2,
    },
    {
      title: "Stable Diffusion Text-to-Image Generation API",
      description: "Model: Hugging Face Stable Diffusion; Backend: FastAPI",
      imgUrl: projImg3,
    },
  ];

  const dsProjects = [
    {
        title: "Grocer Demand Forecasting",
        description: "Conducted EDA; developed comprehensive set of machine learning models (LSTM, XGBoost, SVR, etc.)",
        imgUrl: projImg4,
        url: meijerPDF,

      },
      {
        title: "Time Series Forcasting and Algorithm Evaluation",
        description: "Developed machine learning models; developed an automatic multi-criteria evaluation mechanism to evaluate models",
        imgUrl: projImg5,
        url:tsPDF,
      },
      {
        title: "Machine Learning and Decision Analytics for COVID-19 Vaccine Supply Chain",
        description: "Captured effects of vaccination; Proposed vaccine allocation strategies",
        imgUrl: projImg6,
        url:"https://youtu.be/VJjcgDSibqs",
      },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have been engaged in both web development projects and data science projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analytics & Machine Learning</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <WebProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          dsProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
