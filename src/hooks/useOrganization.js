import { graphql, useStaticQuery } from 'gatsby';

const useOrganization = () => {
  const data = useStaticQuery(graphql`
    query getOrganization {
      github {
        organization(login: "debtcollective") {
          name
          avatarUrl
          login
          url
        }
      }
    }
  `);

  return data.github.organization;
};

export default useOrganization;
