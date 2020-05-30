import styled, { css } from 'styled-components';

const StyledPagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto 4rem;
  padding: 0;

  a {
    text-decoration: none;
  }
`;

const StyledPage = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.alternary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 1rem;
  color: ${({ theme }) => theme.textColor};
  display: flex;
  flex-grow: 1;
  font-size: 1.2rem;
  height: 50px;
  justify-content: center;
  list-style-type: none;
  margin: 0.2rem;
  width: 50px;

  ${({ isActive }) => isActive && css`
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.main};
  `}
`;

export { StyledPagination, StyledPage };
