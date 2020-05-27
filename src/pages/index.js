import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Label = styled.p`
  background: ${({ theme }) => {
    return theme.mainColor;
  }};
`;

export default function UsersList() {
  return (
    <Layout>
      <Label>hey</Label>
    </Layout>
  );
}
