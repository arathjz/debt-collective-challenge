import React from 'react';
import PropTypes from 'prop-types';

import useOrganization from '../../hooks/useOrganization';
import SEO from '../seo';
import Header from '../header';

import { GlobalStyle, StyledLayout } from './style';

function Layout({ children, title }) {
  const organization = useOrganization();

  return (
    <StyledLayout>
      <SEO title={title} />
      <GlobalStyle />
      <Header siteTitle={organization.name} />
      <div>{children}</div>
      <footer>
        <p>
          Icons powered by
          {' '}
          <a rel="noreferrer" target="_blank" href="https://fontawesome.com/license">FontAwesome</a>
        </p>
        <p>
          Build with &hearts; by
          {' '}
          <a rel="noreferrer" target="_blank" href="https://github.com/arathjz">@arathjz</a>
          {' '}
        </p>
      </footer>
    </StyledLayout>
  );
}

Layout.defaultProps = {
  title: '',
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Layout;
