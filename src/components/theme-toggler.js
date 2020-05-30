import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

import sunImage from '../images/sun.svg';
import moonImage from '../images/moon.svg';

const StyledButton = styled.button`
  background: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 0.5rem;
  cursor: pointer;
  height: 50px;
  margin: 2rem 0;
  width: 50px;

  img {
    height: auto;
    width: 80%;
  }

  &:focus {
    outline: none;
  }
`;

export default function ThemeToggler() {
  const themeContext = useContext(ThemeManagerContext);
  const { isDark } = themeContext;
  const icon = isDark ? sunImage : moonImage;

  const toggleTheme = () => themeContext.toggleDark();

  return (
    <StyledButton onClick={toggleTheme} type="button">
      <img src={icon} alt="" />
    </StyledButton>
  );
}
