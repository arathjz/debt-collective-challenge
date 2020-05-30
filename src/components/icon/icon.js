import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.i`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.1rem;
`;

export default function Icon({ name }) {
  if (name === 'pullRequest') {
    return <StyledIcon className="fas fa-code-branch" />;
  }

  if (name === 'star') {
    return <StyledIcon className="fas fa-star" />;
  }

  if (name === 'watch') {
    return <StyledIcon className="fas fa-eye" />;
  }

  if (name === 'fork') {
    return <StyledIcon className="fas fa-utensils" />;
  }

  if (name === 'issue') {
    return <StyledIcon className="fas fa-info-circle" />;
  }

  if (name === 'issue') {
    return <StyledIcon className="fas fa-info-circle" />;
  }

  if (name === 'link') {
    return <StyledIcon className="fas fa-link" />;
  }

  if (name === 'github') {
    return <StyledIcon className="fab fa-github" />;
  }

  if (name === 'git') {
    return <StyledIcon className="fab fa-git-alt" />;
  }
}
