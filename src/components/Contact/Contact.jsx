import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  // Replace these with your actual contact details
  const phoneNumber = '+918248470712'; // With country code
  const whatsappNumber = '+918248470712'; // With country code
  const email = 'ajaybala331@gmail.com';

  return (
    <section id="contact" className={styles.contactSection}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className={styles.sectionTitle}>
            Get In <span className={styles.highlight}>Touch</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Prefer direct contact? Reach me instantly via:
          </p>
        </motion.div>

        <Row className="justify-content-center g-4">
          {/* Phone Call */}
          <Col md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.contactCard}
            >
              <a href={`tel:${phoneNumber}`} className={styles.contactLink}>
                <FaPhone size={40} className={styles.contactIcon} />
                <h3>Call Me</h3>
                <p>Tap to dial instantly</p>
                <Button variant="primary" className={styles.contactButton}>
                  {phoneNumber}
                </Button>
              </a>
            </motion.div>
          </Col>

          {/* WhatsApp */}
          <Col md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.contactCard}
            >
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.contactLink}
              >
                <FaWhatsapp size={40} className={styles.contactIcon} />
                <h3>WhatsApp</h3>
                <p>Chat directly</p>
                <Button variant="success" className={styles.contactButton}>
                  Message Now
                </Button>
              </a>
            </motion.div>
          </Col>

          {/* Email */}
          <Col md={4}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.contactCard}
            >
              <a href={`mailto:${email}`} className={styles.contactLink}>
                <FaEnvelope size={40} className={styles.contactIcon} />
                <h3>Email</h3>
                <p>Send me a message</p>
                <Button variant="info" className={styles.contactButton}>
                  {email}
                </Button>
              </a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;