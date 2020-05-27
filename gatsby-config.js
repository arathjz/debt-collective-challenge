/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
module.exports = {
  siteMetadata: {
    title: 'Open collective challenge',
    description: 'Open collective',
    author: '@arathjz',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-styled-components-dark-mode',
      options: {
        light: require(`${__dirname}/src/theme/lightTheme.js`),
        dark: require(`${__dirname}/src/theme/darkTheme.js`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
