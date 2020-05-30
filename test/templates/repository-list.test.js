/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { useStaticQuery } from 'gatsby';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import RepositoriesList from '../../src/templates/repositories-list';
import theme from '../../src/theme/darkTheme';
import repositoriesFixture from '../fixtures/repositories-list.json';

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

describe('RepositoriesList template', () => {
  const pageContext = {
    totalPages: 5,
    currentPage: 5,
  };
  const { organization } = repositoriesFixture.github;
  const { repositories: { nodes: repositories } } = organization;

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
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  test('should display correct amount of repositories', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(getAllByTestId('repository')).toHaveLength(repositories.length);
  });

  test('should display correct name of repository', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(getByText(repositories[0].name)).toBeInTheDocument();
  });

  test('should display correct description of repository', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(getByText(repositories[0].description)).toBeInTheDocument();
  });

  test('should display correct stars of repository', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(getAllByTestId('stars')[0]).toHaveTextContent(repositories[0].stargazers.totalCount);
  });

  test('should display correct forks of repository', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(getAllByTestId('forks')[0]).toHaveTextContent(repositories[0].forks.totalCount);
  });

  test('should display correct pullRequests of repository', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(getAllByTestId('pullRequests')[0]).toHaveTextContent(
      repositories[0].pullRequests.totalCount,
    );
  });

  test('should display correct watchers of repository', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(getAllByTestId('watchers')[0]).toHaveTextContent(repositories[0].watchers.totalCount);
  });

  test('should display correct issues of repository', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <RepositoriesList data={repositoriesFixture} pageContext={pageContext} />
      </ThemeProvider>,
    );

    expect(getAllByTestId('issues')[0]).toHaveTextContent(repositories[0].issues.totalCount);
  });
});
