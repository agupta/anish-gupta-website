import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Tilt from 'react-tilt';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import CV from './CV_web.pdf';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <AboutImg alt="profile picture" filename={img} />
                  </div>
                </Tilt>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  I&apos;m a third year mathematics undergraduate at the University of Warwick. I
                  have experience in market making, software development, entrepreneurship, and
                  mathematics research. I combine a quantitative mindset with very strong analytical
                  and problem-solving skills (expected 1st,{' '}
                  <a
                    target="_blank"
                    href="https://www.imc-math.org.uk/index.php?year=2021"
                    rel="noreferrer"
                  >
                    IMC 2021
                  </a>{' '}
                  Second Prize). My variety of experiences have equipped me with confident ability
                  to articulate and communicate complex ideas in simple terms.
                </p>
                <p className="about-wrapper__info-text">
                  I&apos;m a confident programmer, with deepest knowledge of Python but have used
                  many languages over my life including C++ and JavaScript. I&apos;ve worked on a
                  few projects involving machine learning (ML), and I&apos;m quickly and constantly
                  learning more and more.
                </p>
                <p className="about-wrapper__info-text">
                  In my spare time I like to play{' '}
                  <a target="_blank" href="https://lichess.org/@/NeggyZero" rel="noreferrer">
                    speed chess
                  </a>{' '}
                  and poker online. I&apos;m also a rower in my university&apos;s boat club.
                  I&apos;ve played guitar in jazz concerts and on the streets of Brighton.
                </p>
                <span className="d-flex mt-3">
                  <a target="_blank" className="cta-btn cta-btn--resume" href={CV} rel="noreferrer">
                    CV
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
