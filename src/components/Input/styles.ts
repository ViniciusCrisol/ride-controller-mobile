import styled from 'styled-components/native';
import { TextInput as Input } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 50px;

  padding: 0 14px;
  margin-bottom: 8px;
  border-radius: 4px;
  background-color: #d0ebe4;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled(Input)`
  margin-left: 14px;
  flex: 1;
  color: #2c2c2c;
  font-size: 18px;
`;
