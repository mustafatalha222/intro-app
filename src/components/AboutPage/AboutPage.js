import React from 'react'
import '../../pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              A committed and enthusiastic Web and Mobile App Developer with over 4+ years of experience, specializing
              in JavaScript but still eager to learn new technologies. <br />I am friendly, self-motivated, a team
              player, a good problem-solver, and hardworking individual who is always looking for new challenges. I
              thrive on challenges and constantly set goals for myself, so I have something to strive toward.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>HTML5/CSS3/JavaScript</li>
                  <li>React | React Native | Vue | Next</li>
                  <li>Redux</li>
                  <li>Jest,react-testing-library and Cypress</li>
                </Col>
                <Col md={5}>
                  <li>Git/Github</li>
                  <li>Typescript</li>
                  <li>Node / Nest</li>
                  <li>CI/CD and Docker</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Aboutpage
