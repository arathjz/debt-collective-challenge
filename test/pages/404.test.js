/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { useStaticQuery } from 'gatsby';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import * as NotFound from '../../src/pages/404';
import theme from '../../src/theme/darkTheme';

jest.mock('../../src/hooks/useOrganization', () => {
  return () => ({
    github: {
      organization: {
        name: 'The debt collective',
        avatarUrl: 'https://images.com/image.svg',
        login: 'debtcollective',
        url: 'https://github.com/debtcollective',
      },
    },
  });
});

describe('404', () => {
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

  test('should render correctly', () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <NotFound.default />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
