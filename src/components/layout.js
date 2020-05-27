import React, { useContext } from 'react';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.main};
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

function Layout(props) {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <div>
      <GlobalStyle />
      <label>
        <input
          type="checkbox"
          onChange={() => themeContext.toggleDark()}
          checked={themeContext.isDark}
        />
        {' '}
        Dark mode
      </label>
      <div>{props.children}</div>
    </div>
  );
}

export default Layout;
