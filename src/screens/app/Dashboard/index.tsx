import React, { useEffect, useMemo, useState } from 'react';
import { subDays, isAfter, parseISO } from 'date-fns';

import api from '../../../library/api';

import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import TextCard from '../../../components/TextCard';
import HeaderCard from '../../../components/HeaderCard';

import List from './List';
import { ListContainer } from './styles';

const Dashboard: React.FC = () => {
  const [logs, setLogs] = useState<ILogs[]>([]);

  useEffect(() => {
    async function getInitialData(): Promise<void> {
      const response = await api.get('logs');
      setLogs(response.data);
    }

    getInitialData();
  }, []);

  const lastWeekLogs = useMemo(() => {
    const startOfWeek = subDays(Date.now(), 7);
    return logs.filter((log) => isAfter(parseISO(log.created_at), startOfWeek));
  }, [logs]);

  return (
    <>
      <Layout>
        <HeaderCard
          label="Valor gasto nos últimos sete dias."
          value={lastWeekLogs.reduce((sum, log) => sum + Number(log.value), 0)}
        />
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
