import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Icon from '../components/icon';
import { StyledContentHeader, StyledGoBack } from './repository.style';

export const repositoryQuery = graphql`
  query getRepository($name: String!) {
    github {
      repository(name: $name, owner: "debtcollective") {
        id
        name
        createdAt
        updatedAt
        description
        url
        forks {
          totalCount
        }
        pullRequests {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
        issues {
          totalCount
        }
        url
      }
    }
  }
`;

export default function Repository({ data }) {
  const { github: { repository } } = data;
  const {
    description,
    forks,
    issues,
    name,
    pullRequests,
    stargazers,
    url,
    watchers,
  } = repository;

  return (
    <Layout title={name}>
      <StyledGoBack to="/repositories">&larr; Go back to repositories list</StyledGoBack>
      <StyledContentHeader>
        <h3>
          <span>
            <Icon name="git" />
            {' '}
          </span>
          {name}
          {' '}
          {' '}
        </h3>
        <a href={url} target="_blank" rel="noreferrer">
          <Icon name="link" />
          <span>{url}</span>
        </a>
        <div className="repository-data">
          <p>
            <Icon name="star" />
            <span data-testid="stars">{stargazers.totalCount}</span>
          </p>
          <p>
            <Icon name="fork" />
            <span data-testid="forks">{forks.totalCount}</span>
          </p>
          <p>
            <Icon name="pullRequest" />
            <span data-testid="pullRequests">{pullRequests.totalCount}</span>
          </p>
          <p>
            <Icon name="watch" />
            <span data-testid="watchers">{watchers.totalCount}</span>
          </p>
          <p>
            <Icon name="issue" />
            <span data-testid="issues">{issues.totalCount}</span>
          </p>
        </div>
        <p>{description}</p>
      </StyledContentHeader>
    </Layout>
  );
}

Repository.propTypes = {
  data: PropTypes.shape({
    github: PropTypes.shape({
      repository: PropTypes.shape({
        description: PropTypes.string,
        forks: PropTypes.shape({
          totalCount: PropTypes.number,
        }),
        issues: PropTypes.shape({
          totalCount: PropTypes.number,
        }),
        name: PropTypes.string,
        pullRequests: PropTypes.shape({
          totalCount: PropTypes.number,
        }),
        stargazers: PropTypes.shape({
          totalCount: PropTypes.number,
        }),
        url: PropTypes.string,
        watchers: PropTypes.shape({
          totalCount: PropTypes.number,
        }),
      }),
    }),
  }).isRequired,
};
