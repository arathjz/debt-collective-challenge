import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Pagination from '../../src/components/pagination';

describe('Pagination', () => {
  const pageContext = {
    totalPages: 5,
    currentPage: 5,
  };

  test('should display correct amount of pages', () => {
    const { getAllByRole } = render(<Pagination pageContext={pageContext} />);

    expect(getAllByRole('link')).toHaveLength(pageContext.totalPages);
  });
});
