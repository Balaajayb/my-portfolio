import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll'; // Changed from react-router-dom
import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.css';
import { FiX } from 'react-icons/fi';

const MobileMenu = ({ isOpen, onClose, links }) => {
  const { theme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.mobileMenuOverlay}
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className={`${styles.mobileMenu} ${theme === 'dark' ? styles.dark : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={onClose}>
              <FiX size={24} />
            </button>
            <nav className={styles.mobileNav}>
              <ul className={styles.mobileNavList}>
                {links.map((link) => (
                  <li key={link.name} className={styles.mobileNavItem}>
                    <Link
                      to={link.path}
                      smooth={true}
                      duration={500}
                      className={styles.mobileNavLink}
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;