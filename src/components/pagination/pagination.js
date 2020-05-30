/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { StyledPagination, StyledPage } from './style';

export default function Pagination({ pageContext }) {
  return (
    <StyledPagination>
      {
        Array.from({ length: pageContext.totalPages }).map((_, index) => {
          const page = index + 1;
          const isActive = pageContext.currentPage === page;
          const link = `/repositories/${index === 0 ? '' : page}`;

          return (
            <Link to={link} key={index} role="link">
              <StyledPage isActive={isActive}>{page}</StyledPage>
            </Link>
          );
        })
      }
    </StyledPagination>
  );
}

Pagination.propTypes = {
  pageContext: PropTypes.shape({
    totalPages: PropTypes.number,
    currentPage: PropTypes.number,
  }).isRequired,
};
