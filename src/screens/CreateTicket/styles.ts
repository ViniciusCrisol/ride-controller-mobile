import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  padding: 20px;
  background: #fff;

  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #1acb78;
  font-size: 18px;
  text-align: center;
  margin-bottom: 24px;
`;

export const SignOutButton = styled(RectButton)`
  width: 100%;
  height: 50px;

  margin-top: 8px;
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
