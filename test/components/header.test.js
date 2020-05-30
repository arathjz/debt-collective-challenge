import React from 'react';
import { useStaticQuery } from 'gatsby';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from '../../src/components/header';

describe('Header', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      placeholderImage: {
        childImageSharp: {
          fixed: {
            base64: 'image',
            width: 50,
            height: 50,
            src: '/static/image.png',
            srcSet: '/static/image.png',
          },
        },
      },
    }));
  });

  test('should display the correct title', () => {
    const siteTitle = 'Debt collective';
    const { getByText } = render(<Header siteTitle={siteTitle} />);

    expect(getByText(siteTitle)).toBeInTheDocument();
    expect(getByText(siteTitle)).toHaveTextContent(siteTitle);
  });
});
