import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledRepositoy = styled.div`
  background: ${({ theme }) => theme.alternary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 1rem;
  margin: 2rem auto;
  max-width: 700px;
  padding: 1rem 2rem;
`;

const StyledLink = styled(Link)`
  border-bottom: 1px solid transparent;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.5rem;
  padding: 2px;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.textColor};
    transition: 0.2s all;
  }
`;

const StyledSubtitle = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: 2rem;
  margin: 0 0 2rem 0;
  text-align: center;
`;

export {
  StyledLink,
  StyledRepositoy,
  StyledSubtitle,
};
