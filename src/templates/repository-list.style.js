import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledList = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-bottom: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StyledRepositoy = styled.div`
  background: ${({ theme }) => theme.alternary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 1rem;
  padding: 1rem 2rem;

  > p {
    color: ${({ theme }) => theme.textColor};
    font-size: 1rem;
  }

  .icons p {
    color: ${({ theme }) => theme.textColor};
    display: inline-block;
    margin-right: 1rem;

    span {
      margin-left: 4px;
    }
  }
`;

const StyledLink = styled(Link)`
  border-bottom: 1px solid transparent;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.5rem;
  padding: 2px;
  text-decoration: none;

  span {
    font-size: 0.75rem;
  }

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

  i {
    font-size: 2rem;
  }
`;

export {
  StyledLink,
  StyledList,
  StyledRepositoy,
  StyledSubtitle,
};
