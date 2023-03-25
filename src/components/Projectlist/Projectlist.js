import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import taptap from "../../Assets/taptap.jpeg";
import logly from "../../Assets/logly.png";
import emoji from "../../Assets/emoji1.jfif";
import raido from "../../Assets/raido.png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={taptap}
                isBlog={false}
                title="Taptap"
                description="Hassle-free fast shopping with an amazing selection of products. Taptap offers an amazing selection of products from Pakistan's most trusted eCommerce stores. "
                ghLink="https://play.google.com/store/apps/details?id=com.nextgeni.android.bsecure&hl=en&gl=US"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={logly}
                isBlog={false}
                title="Logly Animal App"
                description="The Ultimate App, Website Platform, And Community for Animal Caregivers. Offer better world for Animals & Pets by interconnecting the entire Pet Care industry."
                ghLink="https://logly.us/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={raido}
                isBlog={false}
                title="Raido"
                description="Raido comes up with the idea of resolving the booking of commercial vehicles (7, 15, and 30 Seaters) and introduces a fast and easiest way of booking with one click."
                ghLink="https://github.com/mustafatalha222/Raido"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={emoji}
                isBlog={false}
                title="Emoji-game-react-native"
                description="We have to capture the happy emoji for earning points. We have total of 3 life and on clicking sad emoji we lost each life. On loosing all game over."
                ghLink="https://github.com/mustafatalha222/Emoji-game-react-native"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
