import React from 'react';

import Layout from '../../../components/Layout';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';

import { LogList, InfoCard, Label } from './styles';

const History: React.FC = () => (
  <Layout>
    <LogList>
      {/* <InfoCard>
        <Label>18 viagens realizadas</Label>
        <Label>R$ 124.00 gastos em 3 meses</Label>
      </InfoCard> */}
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
