/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { useStaticQuery } from 'gatsby';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import Repository from '../../src/templates/repository';
import theme from '../../src/theme/darkTheme';
import repositoryFixture from '../fixtures/repository.json';

jest.mock('../../src/hooks/useOrganization', () => {
  return () => ({
    github: {
      organization: {
        name: 'The debt collective',
        avatarUrl: 'https://images.com/image.svg',
        login: 'debtcollective',
        url: 'https://github.com/debtcollective',
      },
    },
  });
});

describe('Repository template', () => {
  const { repository } = repositoryFixture.github;

  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      placeholderImage: {
        childImageSharp: {
          fixed: {
            base64: 'image',
            width: 50,
            height: 50,
            src: '/static/image.png',
            srcSet: '/static/image.png',
          },
        },
      },
    }));
  });

  test('render correctly', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('display title', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(getByText(repository.name)).toBeInTheDocument();
  });

  test('display repository url', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(getByText(repository.url)).toBeInTheDocument();
  });

  test('display repository description', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(getByText(repository.description)).toBeInTheDocument();
  });

  test('display total stars', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(getByTestId('stars')).toBeInTheDocument();
    expect(getByTestId('stars')).toHaveTextContent(repository.stargazers.totalCount);
  });

  test('display total forks', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(getByTestId('forks')).toBeInTheDocument();
    expect(getByTestId('forks')).toHaveTextContent(repository.forks.totalCount);
  });

  test('display total pullRequests', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(getByTestId('pullRequests')).toBeInTheDocument();
    expect(getByTestId('pullRequests')).toHaveTextContent(repository.pullRequests.totalCount);
  });

  test('display total watchers', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(getByTestId('watchers')).toBeInTheDocument();
    expect(getByTestId('watchers')).toHaveTextContent(repository.watchers.totalCount);
  });

  test('display total issues', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Repository data={repositoryFixture} />
      </ThemeProvider>,
    );

    expect(getByTestId('issues')).toBeInTheDocument();
    expect(getByTestId('issues')).toHaveTextContent(repository.issues.totalCount);
  });
});
