const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const reposPerPage = 10;
  const repositoriesPages = [];

  const query = `
    query getRepositories($after: String) {
      github {
        organization(login: "debtcollective") {
          repositories(first: 10, after: $after) {
            nodes {
              name
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

  let currentPage = 1;

  async function createPagesRecursively(query, endCursor) {
    const { data } = await graphql(query, { after: endCursor });
    const { repositories } = data.github.organization;
    const { nodes, totalCount, pageInfo } = repositories;
    const { hasNextPage } = pageInfo;
    const totalPages = Math.floor(totalCount / reposPerPage);

    repositoriesPages.push(...nodes.map(node => ({ name: node.name })));
    createPage({
      path: currentPage === 1 ? '/repositories' : `/repositories/${currentPage}`,
      component: path.resolve('src/templates/repositories-list.js'),
      context: {
        after: endCursor,
        currentPage,
        hasNextPage,
        totalPages,
      },
    });

    if (hasNextPage) {
      currentPage += 1;
      await createPagesRecursively(query, pageInfo.endCursor);
    }
  }

  await createPagesRecursively(query);

  repositoriesPages.map(repository => createPage({
    path: `/repositories/${repository.name}`,
    component: path.resolve('src/templates/repository.js'),
    context: {
      name: repository.name,
    },
  }));
};
