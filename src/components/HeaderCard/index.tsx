import React from 'react';

import { Container, Label, Value } from './styles';

interface ICard {
  label: string;
  value: number;
}

const HeaderCard: React.FC<ICard> = ({ label, value }) => (
  <Container>
    <Label>{label}</Label>
    <Value>R$ {value.toFixed(2)}</Value>
  </Container>
);

export default HeaderCard;
