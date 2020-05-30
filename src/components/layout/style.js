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
    font-family: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const StyledLayout = styled.div`
  margin: auto;
  max-width: 1400px;
  padding-top: 10rem;

  > section {
    h2 {
      color: ${({ theme }) => theme.textColor};
      font-size: 3rem;
      margin: 0 0 0 8rem;
    }

    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.textColor};
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
    padding-bottom: 4rem;
  }

  @media (max-width: 768px) {
    > section {
      flex-direction: column;

      h2 {
        margin: 3rem 0 0;
      }
    }
  }

  @media (max-width: 576px) {
    > section h2 {
      font-size: 2rem;
    }
  }
`;

export {
  GlobalStyle,
  StyledLayout,
};
