import React, { useContext } from 'react';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import sunImage from '../../images/sun.svg';
import moonImage from '../../images/moon.svg';
import StyledButton from './style';

export default function ThemeToggler() {
  const themeContext = useContext(ThemeManagerContext);
  const { isDark } = themeContext;
  const icon = isDark ? sunImage : moonImage;

  const toggleTheme = () => themeContext.toggleDark();

  return (
    <StyledButton onClick={toggleTheme} type="button" aria-label="Left Align">
      <img src={icon} alt="" />
    </StyledButton>
  );
}
