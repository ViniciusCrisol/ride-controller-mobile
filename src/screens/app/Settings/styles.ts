import styled from 'styled-components/native';
import { Form as FormTemplate } from '@unform/mobile';
import { RectButton } from 'react-native-gesture-handler';

export const Form = styled(FormTemplate)`
  width: 100%;
  margin-bottom: auto;
`;

export const SignOutButton = styled(RectButton)`
  width: 100%;
  height: 40px;

  margin: 14px 0;
  border-radius: 4px;
  background: #f82e5a;

  align-items: center;
  justify-content: center;
`;

export const SignOutLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
