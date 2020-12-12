import React from 'react';

import { Container, Label, Value } from './styles';

interface ICard {
  label: string;
  value: number;
}

const HeaderCard: React.FC<ICard> = ({ label, value }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>R$ {Number(value).toFixed(2)}</Value>
    </Container>
  );
};

export default HeaderCard;
