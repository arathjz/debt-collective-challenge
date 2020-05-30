import React from 'react';
import PropTypes from 'prop-types';

import styled, { createGlobalStyle } from 'styled-components';

import useOrganization from '../hooks/useOrganization';
import SEO from './seo';
import ThemeToggler from './theme-toggler';

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

  > section {
    [src] {
      height: auto;
      width: 200px;
    }

    h1 {
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
`;

function Layout({ children }) {
  const organization = useOrganization();

  return (
    <StyledLayout>
      <SEO />
      <GlobalStyle />
      <ThemeToggler />
      <section>
        <img src={organization.avatarUrl} alt={organization.name} />
        <h1>{organization.name}</h1>
      </section>
      <div>{children}</div>
    </StyledLayout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
