import React from 'react';

import { Container, Label } from './styles';

interface ICard {
  leftLabel: string;
  rightLabel: string;
}

const TextCard: React.FC<ICard> = ({ leftLabel, rightLabel }) => (
  <Container>
    <Label>{leftLabel}</Label>
    <Label>{rightLabel}</Label>
  </Container>
);

export default TextCard;
