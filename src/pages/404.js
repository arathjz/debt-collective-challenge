import React from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { StyledLink, StyledNotFound } from './style';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledNotFound>
      <Image />
      <h2>NOT FOUND</h2>
      <h3>
        We are sorry this content it is not available, in the
        meantime, you might want to take a look at our repositories
      </h3>
      <StyledLink to="/repositories">View repositories</StyledLink>
    </StyledNotFound>
  </Layout>
);

export default NotFoundPage;
