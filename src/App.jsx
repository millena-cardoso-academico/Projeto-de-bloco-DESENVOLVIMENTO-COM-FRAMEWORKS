import { useState } from 'react';
import Header from './components/Header';
import MovieCategory from './components/MovieCategory';
import ThemeToggle from './components/ThemeToggle';
import SearchBar from './components/SearchBar';
import styles from './styles/App.module.css';

const categories = [
  { title: 'Ação', movies: ['Rogue One', 'Rogue One', 'Rogue One', 'Rogue One', 'Rogue One'] },
  { title: 'Comédia', movies: ['Rogue One', 'Rogue One', 'Rogue One', 'Rogue One', 'Rogue One'] },
  { title: 'Drama', movies: ['Rogue One', 'Rogue One', 'Rogue One', 'Rogue One', 'Rogue One'] },
  { title: 'Terror', movies: ['Rogue One', 'Rogue One', 'Rogue One', 'Rogue One', 'Rogue One'] },
  { title: 'Ficção Científica', movies: ['Rogue One', 'Rogue One', 'Rogue One', 'Rogue One', 'Rogue One'] },
  { title: 'Documentário', movies: ['Rogue One', 'Rogue One', 'Rogue One', 'Rogue One', 'Rogue One'] },
  { title: 'Animação', movies: ['Rogue One', 'Rogue One', 'Rogue One', 'Rogue One', 'Rogue One'] }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    movies: category.movies.filter(movie => movie.toLowerCase().includes(searchQuery))
  }));

  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <Header darkMode={darkMode} />
      <ThemeToggle toggleTheme={toggleTheme} darkMode={darkMode} />
      <SearchBar onSearch={handleSearch} darkMode={darkMode} />
      <main className={styles.main}>
        {filteredCategories.map((category, index) => (
          <MovieCategory
            key={index}
            title={category.title}
            movies={category.movies}
            darkMode={darkMode}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
