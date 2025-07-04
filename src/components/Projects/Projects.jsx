import { motion } from 'framer-motion';
import { projects } from '../../constants/data';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-center mb-5 ${styles.sectionTitle}`}>
            My <span className={styles.highlight}>Projects</span>
          </h2>
        </motion.div>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={project.id} md={6} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;