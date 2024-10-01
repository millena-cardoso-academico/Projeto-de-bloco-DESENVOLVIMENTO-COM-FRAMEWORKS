import PropTypes from 'prop-types';
import { FaSearch, FaFilm, FaCalendarAlt } from 'react-icons/fa';
import styles from '../styles/SearchBar.module.css';

function SearchBar({ onSearch, darkMode }) {
  return (
    <div className={`${styles.searchBarWrapper} ${darkMode ? 'dark' : ''}`}>
      <div className={styles.searchBar}>
        <FaSearch className={styles.icon} />
        <input
          type="text"
          placeholder="Pesquise por um filme..."
          className={styles.input}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className={styles.menu}>
        <ul>
          <li><FaCalendarAlt className={styles.menuIcon} /> Lançamentos</li>
          <li><FaFilm className={styles.menuIcon} /> Categorias</li>
        </ul>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default SearchBar;
