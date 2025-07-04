import { useState } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../hooks/useTheme';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: 'hero' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`${styles.navbar} ${theme === 'dark' ? styles.dark : ''}`}
      >
        <Container>
          <Navbar.Brand 
            as={Link} 
            to="home" 
            smooth={true} 
            className={styles.brand}
            onClick={() => setExpanded(false)}
          >
            Portfolio
          </Navbar.Brand>
          
          <div className="d-flex align-items-center">
            <button
              onClick={toggleTheme}
              className={`${styles.themeToggle} me-3`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            
            <button
              onClick={() => setExpanded(!expanded)}
              className={styles.hamburger}
              aria-label="Toggle menu"
            >
              <FiMenu size={24} />
            </button>
          </div>

          <div className={`${styles.desktopNav} d-none d-lg-block`}>
            <nav>
              <ul className={styles.navList}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      smooth={true}
                      duration={500}
                      className={styles.navLink}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </Navbar>
      
      <MobileMenu 
        isOpen={expanded} 
        onClose={() => setExpanded(false)} 
        links={navLinks}
      />
    </>
  );
};

export default Header;