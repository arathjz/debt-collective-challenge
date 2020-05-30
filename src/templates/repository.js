import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const repositoryQuery = graphql`
  query getRepository($name: String!) {
    github {
      repository(name: $name, owner: "debtcollective") {
        id
        name
        createdAt
        updatedAt
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
        url
      }
    }
  }
`;


export default function Repository({ data }) {
  const { github: { repository } } = data;
  const { name } = repository;

  return (
    <Layout title={name}>
      Hey
    </Layout>
  );
}

Repository.propTypes = {
  data: PropTypes.shape({
    github: PropTypes.shape({
      repository: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  }).isRequired,
};
