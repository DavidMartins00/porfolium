import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Languages = () => {
  const { languages } = useContext(PortfolioContext);

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
    <section id="languages">
      <Container>
        <div className="language-wrapper">
          <Title title="Languages & Tools" />
          <div className="row">
            {languages.map((language) => {
              const { name, id } = language;

              return (
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 key={id} className="project-wrapper__text-title">
                        {name}
                      </h3>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Languages;
