import PropTypes from 'prop-types';
import { FaSun, FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  position: fixed;
  top: 20px;
  right: 20px;
  color: ${props => props.darkMode ? '#fff' : '#000'};
`;

function ThemeToggle({ toggleTheme, darkMode }) {
  return (
    <ToggleButton onClick={toggleTheme} darkMode={darkMode}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </ToggleButton>
  );
}

ThemeToggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default ThemeToggle;
