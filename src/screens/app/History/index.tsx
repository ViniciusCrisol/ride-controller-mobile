import React, { useEffect, useState } from 'react';

import api from '../../../library/api';
import { getDate, getHour } from './library/formatDate';

import Layout from '../../../components/Layout';
import Loading from '../../../components/Loading';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';

import { LogList, Header, HeaderText } from './styles';

const History: React.FC = () => {
  const [logs, setLogs] = useState<ILog[]>([]);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      const response = await api.get('logs');
      setLogs(response.data);
    }

    getInitialData();
  }, []);

  if (logs.length === 0) return <Loading />;

  return (
    <Layout>
      <Header>
        <HeaderText>Histórioco de viagens</HeaderText>
      </Header>
      <LogList>
        <HeaderCard
          label={`Total gasto em ${logs.length} viagens:`}
          value={logs.reduce((sum, log) => sum + Number(log.value), 0)}
        />
        {logs.map((log) => (
          <TextCard
            key={log.id}
            leftLabel={getDate(log.created_at)}
            rightLabel={getHour(log.created_at)}
          />
        ))}
      </LogList>
    </Layout>
  );
};

export default History;
