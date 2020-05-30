import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.i`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.1rem;
`;

export default function Icon({ name }) {
  if (name === 'pullRequest') {
    return <StyledIcon className="fas fa-code-branch" data-testid="pullRequest" />;
  }

  if (name === 'star') {
    return <StyledIcon className="fas fa-star" data-testid="star" />;
  }

  if (name === 'watch') {
    return <StyledIcon className="fas fa-eye" data-testid="watch" />;
  }

  if (name === 'fork') {
    return <StyledIcon className="fas fa-utensils" data-testid="fork" />;
  }

  if (name === 'issue') {
    return <StyledIcon className="fas fa-info-circle" data-testid="issue" />;
  }

  if (name === 'link') {
    return <StyledIcon className="fas fa-link" data-testid="link" />;
  }

  if (name === 'github') {
    return <StyledIcon className="fab fa-github" data-testid="github" />;
  }

  if (name === 'git') {
    return <StyledIcon className="fab fa-git-alt" data-testid="git" />;
  }

  return null;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
