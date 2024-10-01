import PropTypes from 'prop-types';
import styles from '../styles/MovieCard.module.css';

function MovieCard({ movie, darkMode }) {
  return (
    <div className={styles.movieCard}>
      <img
        className={styles.movieImage}
        src="https://uauposters.com.br/media/catalog/product/1/2/127820180226-uau-posters-filmes-rogue-one-a-star-wars-history.jpg"
        alt={movie}
      />
      <p className={`${styles.movieTitle} ${darkMode ? styles.darkTitle : ''}`}>{movie}</p>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default MovieCard;
