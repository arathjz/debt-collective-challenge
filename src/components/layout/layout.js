import React from 'react';
import PropTypes from 'prop-types';

import useOrganization from '../../hooks/useOrganization';
import SEO from '../seo';
import Image from '../image';
import Header from '../header';

import { GlobalStyle, StyledLayout } from './style';

function Layout({ children, title }) {
  const organization = useOrganization();

  return (
    <StyledLayout>
      <SEO title={title} />
      <GlobalStyle />
      <Header siteTitle={organization.name} />
      <section>
        <Image />
        <h2>{organization.name}</h2>
      </section>
      <div>{children}</div>
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
