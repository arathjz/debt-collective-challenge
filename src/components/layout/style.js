import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.main};
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    font-size: 12px;
    font-family: 'Roboto', 'Helvetica', 'SF Pro' ,sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const StyledLayout = styled.div`
  margin: auto;
  max-width: 1400px;
  padding: 2rem;
  padding-top: 10rem;

  footer {
    * {
      color: ${({ theme }) => theme.textColor};
    }

    p {
      text-align: center;
      
      a {
        text-decoration: underline;
      }
    }
  }
`;

export {
  GlobalStyle,
  StyledLayout,
};
