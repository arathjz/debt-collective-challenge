import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const StyledMain = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.textColor};
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 4rem;
    }
  }

  @media (max-width: 576px) {
    padding-bottom: 4rem;
  }
`;

const StyledLink = styled(Link)`
  align-items: center;
  background: ${({ theme }) => theme.alternary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.textColor};
  display: flex;
  font-size: 1.5rem;
  height: 60px;
  justify-content: center;
  text-decoration: none;
  transition: 0.3s ease-in;
  width: 300px;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s ease-in;
  }
`;

export default function UsersList() {
  return (
    <Layout>
      <StyledMain>
        <h2>Welcome!</h2>
        <StyledLink to="/repositories">View repositories</StyledLink>
      </StyledMain>
    </Layout>
  );
}
