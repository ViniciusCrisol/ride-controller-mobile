import React from 'react';

import { Container, Item, Label, Quantity } from './styles';

const List: React.FC = () => (
  <Container>
    {[1, 2, 3, 4, 5].map((item) => (
      <Item key={item}>
        <Quantity>{item}</Quantity>
        <Label>Número de viagens semanais</Label>
      </Item>
    ))}
  </Container>
);

export default List;
