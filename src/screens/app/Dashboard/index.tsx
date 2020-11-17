import React from 'react';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';

import List from './List';
import { ListContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Layout>
        <HeaderCard label="Total gasto em 60 viagens" value={120} />
        <TextCard leftLabel="4 viagens" rightLabel="R$ 8.00" />
        <Button>Zerar</Button>
      </Layout>
      <ListContainer>
        <List />
      </ListContainer>
    </>
  );
};

export default Dashboard;
