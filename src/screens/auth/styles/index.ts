import styled from 'styled-components/native';
import { Form as FormTemplate } from '@unform/mobile';

export const Form = styled(FormTemplate)`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

export const CreateAccont = styled.Text`
  color: #1acb78;
  text-align: right;
  text-decoration: underline;
  margin-top: 8px;
`;

export const Title = styled.Text`
  color: #2c2c2c;
  font-size: 32px;
  text-align: center;
  margin-bottom: 14px;
`;
