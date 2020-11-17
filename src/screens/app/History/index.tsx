import React from 'react';

import Layout from '../../../components/Layout';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';

import { LogList, Header, HeaderText } from './styles';

const History: React.FC = () => (
  <Layout>
    <Header>
      <HeaderText>14 viagens realizadas</HeaderText>
    </Header>
    <LogList>
      <HeaderCard label="Total gasto em 60 viagens" value={120} />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="17:00" />
      <TextCard leftLabel="19 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="17:00" />
      <TextCard leftLabel="19 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="17:00" />
      <TextCard leftLabel="19 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="17:00" />
      <TextCard leftLabel="19 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="17:00" />
      <TextCard leftLabel="19 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="17:00" />
      <TextCard leftLabel="19 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="8:00" />
      <TextCard leftLabel="20 dezembro 2020" rightLabel="17:00" />
      <TextCard leftLabel="19 dezembro 2020" rightLabel="8:00" />
    </LogList>
  </Layout>
);

export default History;
