import React, { useMemo } from 'react';
import { subDays, isAfter, parseISO } from 'date-fns';

import { useAuth } from '../../../../hooks/auth';
import formatDate from '../../../../library/formatDate';

import { Container, Item, Label, Quantity } from './styles';

interface IList {
  logs: ILog[];
}

const List: React.FC<IList> = ({ logs }) => {
  const { lastPayment } = useAuth();

  const weeklyLogs = useMemo(() => {
    const startOfWeek = subDays(Date.now(), 7);
    return logs.filter((log) => isAfter(parseISO(log.created_at), startOfWeek));
  }, [logs]);

  const monthlyLogs = useMemo(() => {
    const startOfMonth = subDays(Date.now(), 30);
    return logs.filter((log) =>
      isAfter(parseISO(log.created_at), startOfMonth),
    );
  }, [logs]);

  const lastPaymentDate = useMemo(() => {
    return lastPayment
      ? formatDate(lastPayment.created_at).split('/20')[0]
      : '-';
  }, [lastPayment]);

  const lastPaymentValue = useMemo(() => {
    return lastPayment ? lastPayment.value : '-';
  }, [lastPayment]);

  return (
    <Container>
      <Item>
        <Quantity>{weeklyLogs.length}</Quantity>
        <Label>Viagens nos {'\n'} últimos 7 dias</Label>
      </Item>
      <Item>
        <Quantity>{monthlyLogs.length}</Quantity>
        <Label>Viagens nos {'\n'} últimos 30 dias</Label>
      </Item>
      <Item>
        <Quantity>{lastPaymentDate}</Quantity>
        <Label>Data do {'\n'} último pagamento</Label>
      </Item>
      <Item>
        <Quantity>R$ {lastPaymentValue}</Quantity>
        <Label>Valor do {'\n'} último pagamento</Label>
      </Item>
    </Container>
  );
};

export default List;
