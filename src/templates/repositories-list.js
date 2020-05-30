import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Pagination from '../components/pagination';
import Icon from '../components/icon';
import {
  StyledLink,
  StyledList,
  StyledRepositoy,
  StyledSubtitle,
} from './repositories-list.style';

export const repositoriesListQuery = graphql`
  query getRepositories($after: String) {
    github {
      organization(login: "debtcollective") {
        name
        login
        repositories(first: 10, after: $after) {
          nodes {
            id
            name
            description
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
          }
        }
      }
    }
  }
`;

export default function RepositoriesList({ data, pageContext }) {
  const { organization } = data.github;
  const { nodes } = organization.repositories;

  return (
    <Layout title="Repositories">
      <StyledSubtitle>
        Repositories
        {' '}
        <span>
          <Icon name="github" />
          {' '}
        </span>
        {' '}
      </StyledSubtitle>
      <StyledList>
        {
        nodes.map(node => {
          const {
            description,
            forks,
            issues,
            name,
            pullRequests,
            stargazers,
            watchers,
          } = node;

          return (
            <StyledRepositoy key={node.id}>
              <StyledLink to={`/repositories/${name}`}>
                {name}
                {' '}
                <span>
                  @
                  {organization.login}
                </span>
              </StyledLink>
              <p>{description || 'This project does not have description =('}</p>
              <div className="icons">
                <p>
                  <Icon name="star" />
                  <span>{stargazers.totalCount}</span>
                </p>
                <p>
                  <Icon name="fork" />
                  <span>{forks.totalCount}</span>
                </p>
                <p>
                  <Icon name="pullRequest" />
                  <span>{pullRequests.totalCount}</span>
                </p>
                <p>
                  <Icon name="watch" />
                  <span>{watchers.totalCount}</span>
                </p>
                <p>
                  <Icon name="issue" />
                  <span>{issues.totalCount}</span>
                </p>
              </div>
            </StyledRepositoy>
          );
        })
      }
      </StyledList>
      <Pagination pageContext={pageContext} />
    </Layout>
  );
}

RepositoriesList.propTypes = {
  data: PropTypes.shape({
    github: PropTypes.shape({
      organization: PropTypes.shape({
        avatarUrl: PropTypes.string,
        name: PropTypes.string,
        login: PropTypes.string,
        repositories: PropTypes.shape({
          nodes: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
          })),
        }),
      }),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
  }).isRequired,
};
