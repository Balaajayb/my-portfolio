import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import styles from './Hero.module.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`display-4 fw-bold ${styles.heroTitle}`}>
                Hi, I'm <span className={styles.highlight}>Bala Ajay B</span>
              </h1>
              <div className={styles.typeAnimation}>
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    1000,
                    'UI/UX Designer',
                    1000,
                    'React Specialist',
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className={`lead ${styles.heroSubtitle}`}>
                I build exceptional digital experiences with modern technologies.
              </p>
              <div className="d-flex gap-3 mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  className={styles.primaryBtn}
                >
                  View Projects
                </Button>
                <Button
                  variant="outline-primary"
                  size="lg"
                  className={styles.secondaryBtn}
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.heroImageWrapper}
            >
              <div className={styles.heroImage}>
                <div className={styles.constructionNotice}>
                  <h3>Portfolio Under Construction</h3>
                  <p>Further details will be updated soon</p>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;