import PropTypes from 'prop-types';
import { useState } from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/MovieCategory.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function MovieCategory({ title, movies, darkMode }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentMovies = movies.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className={styles.category}>
      <h2 className={`${styles.title} ${darkMode ? styles.darkTitle : ''}`}>{title}</h2>
      <div className={styles.controls}>
        <FaChevronLeft className={styles.arrow} onClick={prevPage} />
        <div className={styles.movies}>
          {currentMovies.map((movie, index) => (
            <MovieCard key={index} movie={movie} darkMode={darkMode} />
          ))}
        </div>
        <FaChevronRight className={styles.arrow} onClick={nextPage} />
      </div>
    </section>
  );
}

MovieCategory.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default MovieCategory;
