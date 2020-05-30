import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;

  h1 {
    color: ${({ theme }) => theme.textColor};
    margin: 0 1.5rem;
  }

  @media (max-width: 576px) {
    h1 {
      display: none;
    }
  }
`;

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.alternary};
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 300;

  .content {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1400px;
    padding: 2rem;
  }
`;

export { StyledHeader, StyledLink };
