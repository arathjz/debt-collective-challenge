import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Pagination from '../components/pagination';
import {
  StyledLink,
  StyledRepositoy,
  StyledSubtitle,
} from './repository-list.style';

export const repositoriesListQuery = graphql`
  query getRepositories($after: String) {
    github {
      organization(login: "debtcollective") {
        name
        avatarUrl
        login
        repositories(first: 10, after: $after) {
          nodes {
            id
            name
            pullRequests {
              totalCount
            }
            issues {
              totalCount
            }
          }
          totalCount
          pageInfo {
            hasNextPage
            endCursor
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
      <StyledSubtitle>Repositories</StyledSubtitle>
      {
        nodes.map(node => {
          return (
            <StyledRepositoy style={({ color: 'white ' })} key={node.id}>
              <StyledLink to={`/repositories/${node.name}`}>
                {node.name}
              </StyledLink>
            </StyledRepositoy>
          );
        })
      }
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
        repositories: PropTypes.shape({
          nodes: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
          })),
        }),
      }),
    }),
  }).isRequired,
};