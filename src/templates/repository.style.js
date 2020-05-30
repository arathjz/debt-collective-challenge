import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledContentHeader = styled.section`
  background: ${({ theme }) => theme.alternary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 1.5rem;
  color: ${({ theme }) => theme.textColor};
  min-height: 200px;
  padding: 1.5rem;
  padding-left: 4rem;
  
  * {
    word-break: break-all;
  }

  h3 {
    &, & i {
      font-size: 2.5rem;
    }

    i {
      margin-right: 8px;
    }
  }
  
  > p {
    font-size: 1.5rem;
  }

  [href] {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
    display: block;
    margin-bottom: 1.5rem;
    word-break: break-all;

    span {
      margin-left: 0.75rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    display: inline-block;
    margin-right: 1rem;

    span {
      margin-left: 0.75rem;
    }
  }

  @media (max-width: 576px) {
    padding: 1rem;

    h3 {
      font-size: 1.5rem;
    }

    > p {
      font-size: 1rem;
    }
  }
`;

const StyledGoBack = styled(Link)`
  color: ${({ theme }) => theme.textColor};
  display: block;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  StyledContentHeader,
  StyledGoBack,
};
