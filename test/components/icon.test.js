import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Icon from '../../src/components/icon';

describe('Icon', () => {
  test('should display pullRequest icon', () => {
    const { getByTestId } = render(<Icon name="pullRequest" />);

    expect(getByTestId('pullRequest')).toBeInTheDocument();
  });

  test('should display star icon', () => {
    const { getByTestId } = render(<Icon name="star" />);

    expect(getByTestId('star')).toBeInTheDocument();
  });

  test('should display watch icon', () => {
    const { getByTestId } = render(<Icon name="watch" />);

    expect(getByTestId('watch')).toBeInTheDocument();
  });

  test('should display fork icon', () => {
    const { getByTestId } = render(<Icon name="fork" />);

    expect(getByTestId('fork')).toBeInTheDocument();
  });

  test('should display issue icon', () => {
    const { getByTestId } = render(<Icon name="issue" />);

    expect(getByTestId('issue')).toBeInTheDocument();
  });

  test('should display link icon', () => {
    const { getByTestId } = render(<Icon name="link" />);

    expect(getByTestId('link')).toBeInTheDocument();
  });

  test('should display github icon', () => {
    const { getByTestId } = render(<Icon name="github" />);

    expect(getByTestId('github')).toBeInTheDocument();
  });

  test('should display git icon', () => {
    const { getByTestId } = render(<Icon name="git" />);

    expect(getByTestId('git')).toBeInTheDocument();
  });
});
