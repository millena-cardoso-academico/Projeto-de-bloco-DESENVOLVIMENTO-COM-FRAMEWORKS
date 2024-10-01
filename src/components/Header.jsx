import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';
import { FaSignInAlt, FaRegQuestionCircle, FaHeadset, FaFileInvoice, FaHome } from 'react-icons/fa';

function Header({ darkMode }) {
  return (
    <header className={`${styles.header} ${darkMode ? 'dark' : ''}`}>
      <h1 className={styles.logo}>DigiFlix</h1>
      <p className={styles.slogan}>Assista filmes em grupo no conforto de sua casa!</p>
      <nav>
        <ul className={styles.navList}>
          <li><FaHome /> Home</li>
          <li><FaSignInAlt /> Login</li>
          <li><FaFileInvoice /> Planos</li>
          <li><FaHeadset /> Suporte</li>
          <li><FaRegQuestionCircle /> F.A.Q.</li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Header;
