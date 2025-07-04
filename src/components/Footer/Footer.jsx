import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail,
  FiArrowUp 
} from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/Balaajayb' },
    { icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/balaajay/' },
    // { icon: <FiTwitter size={20} />, url: 'https://twitter.com' },
    { icon: <FiMail size={20} />, url: 'mailto:ajaybala331@gmail.com' },
  ];

  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={styles.copyright}
            >
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </motion.p>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={styles.socialLinks}
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`Social link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
              <button 
                onClick={scrollToTop}
                className={styles.scrollTop}
                aria-label="Scroll to top"
              >
                <FiArrowUp size={20} />
              </button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;