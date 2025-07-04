import styles from './Projects.module.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import project1 from '../../assets/images/project1.jpeg';


const ProjectCard = ({ project }) => {
  return (
    <Card className={`h-100 ${styles.projectCard}`}>
      <div className={styles.cardImageWrapper}>
        <Card.Img variant="top" src={project1} alt={project.title} />
      </div>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </Card.Body>
      <Card.Footer className="bg-transparent border-top-0">
        <div className="d-flex gap-3">
          <Button
            variant="outline-primary"
            size="sm"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </Button>
          <Button
            variant="outline-secondary"
            size="sm"
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;