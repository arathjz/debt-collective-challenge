import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  h2 {
    color: ${({ theme }) => theme.textColor};
    font-size: 2rem;
  }

  h3 {
    color: ${({ theme }) => theme.textColor};
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    padding: 0 4rem;
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

export { StyledLink, StyledNotFound };
