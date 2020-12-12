import React, { useEffect, useState } from 'react';

import api from '../../../library/api';

import Layout from '../../../components/Layout';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';

import { LogList, Header, HeaderText, Spinner, LoadContainer } from './styles';

function switchMonth(month: string): string {
  switch (month) {
    case '01':
      return 'janeiro';
    case '02':
      return 'fevereiro';
    case '03':
      return 'março';
    case '04':
      return 'abril';
    case '05':
      return 'maio';
    case '06':
      return 'junho';
    case '07':
      return 'julho';
    case '08':
      return 'agosto';
    case '09':
      return 'setembro';
    case '10':
      return 'outubro';
    case '11':
      return 'novembro';
    default:
      return 'dezembro';
  }
}

function getDate(date: string): string {
  const splittedDate = date.split('T')[0];
  const [year, month, day] = splittedDate.split('-');
  return `${day} ${switchMonth(month)} ${year}`;
}

function getHour(date: string): string {
  const splittedDate = date.split('T')[1];
  const [hour, minutes, _seconds] = splittedDate.split(':');
  return `${hour}:${minutes}`;
}

const History: React.FC = () => {
  const [logs, setLogs] = useState<ILogs[]>([]);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      const response = await api.get('logs');
      setLogs(response.data);
    }

    getInitialData();
  }, []);

  if (logs.length === 0) {
    return (
      <LoadContainer>
        <Spinner />
      </LoadContainer>
    );
  }

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
