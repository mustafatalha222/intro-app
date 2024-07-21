import '../../pages/style.css'
import { Container, Row, Col } from 'react-bootstrap'

import { AiFillGithub, AiFillMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import Text from './Text'

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hey <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I am Talha Mustafa</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open('https://github.com/mustafatalha222')
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open('https://www.linkedin.com/in/mustafatalha222/')
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>

            <button
              onClick={() => {
                window.location = 'mailto:mustafatalha222@gmail.com'
              }}
              className="socailmediabtn"
            >
              <AiFillMail className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
