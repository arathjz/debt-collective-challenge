import React from 'react';

import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Repository({ data, pageContext }) {
  return (
    <Layout>
      Hey
    </Layout>
  );
}

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
