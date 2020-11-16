import React from 'react';

import Layout from '../../../components/Layout';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';

import { Container, LogList } from './styles';

const History: React.FC = () => (
  <Layout>
    <Container>
      <HeaderCard label="Total gasto em 60 viagens" value={120} />
      <LogList>
        <TextCard leftLabel="4 viagens" rightLabel="R$ 8.00" />
        <TextCard leftLabel="4 viagens" rightLabel="R$ 8.00" />
        <TextCard leftLabel="4 viagens" rightLabel="R$ 8.00" />
      </LogList>
    </Container>
  </Layout>
);

export default History;
