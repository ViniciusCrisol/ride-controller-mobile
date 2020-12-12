import React from 'react';

import { Container, Item, Label, Quantity } from './styles';

interface IList {
  logs: ILog[];
}

const List: React.FC<IList> = ({ logs }) => {
  return (
    <Container>
      {[1, 2, 3, 4, 5].map((item) => (
        <Item key={item}>
          <Quantity>{item}</Quantity>
          <Label>Número de{'\n'}viagens semanais</Label>
        </Item>
      ))}
    </Container>
  );
};

export default List;
