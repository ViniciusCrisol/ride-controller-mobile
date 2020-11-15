import React from 'react';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Container>
        <HeaderCard label="Total gasto em 60 viagens" value={120} />
        <TextCard leftLabel="4 viagens" rightLabel="R$ 8.00" />
        <Button>Zerar</Button>
      </Container>
    </Layout>
  );
};

export default Dashboard;
