import { motion } from 'framer-motion';
import { skills } from '../../constants/data';
import styles from './About.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {
  const handleDownload = () => {
    const resumeUrl = '/images/B_Bala_Ajay_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Bala_Ajay_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className={styles.aboutSection}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>
                About <span className={styles.highlight}>Me</span>
              </h2>
              <p className={styles.aboutText}>
                I'm a passionate React & MERN stack developer with hands-on experience in building responsive and dynamic web applications. I've completed an internship at Webersink IT Architect, Nagercoil, where I worked on real-time client projects and enhanced my skills in front-end and back-end development.

With strong proficiency in React.js, Node.js, Express.js, and MongoDB, I've built several small-scale but complete projects that follow clean code practices and user-focused design. I focus on creating scalable, user-friendly, and mobile-responsive interfaces that meet modern web standards.
              </p>
              <p className={styles.aboutText}>
                When I'm not coding, you can find me hiking in the mountains, 
                reading sci-fi novels, or experimenting with new recipes in the kitchen.
              </p>
              <div className="mt-4">
                <button 
                  onClick={handleDownload}
                  className={`btn btn-primary ${styles.downloadBtn}`}
                >
                  Download Resume
                </button>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.skillsWrapper}
            >
              <h3 className={styles.skillsTitle}>My Skills</h3>
              <div className={styles.skillsContainer}>
                {skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className="d-flex justify-content-between mb-2">
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <ProgressBar
                      now={skill.level}
                      className={styles.progressBar}
                      variant="primary"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;