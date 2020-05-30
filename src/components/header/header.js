import PropTypes from 'prop-types';
import React from 'react';

import ThemeToggler from '../theme-toggler';
import SmallImage from '../small-image';
import { StyledHeader, StyledLink } from './style';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="content">
      <StyledLink to="/">
        <SmallImage />
        <h1>
          {siteTitle}
        </h1>
      </StyledLink>
      <ThemeToggler />
    </div>
  </StyledHeader>
);

Header.defaultProps = {
  siteTitle: '',
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
