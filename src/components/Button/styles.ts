import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface IContainer {
  isLoading: boolean;
}

export const Container = styled(RectButton)<IContainer>`
  width: 100%;
  height: 50px;

  border-radius: 4px;
  background-color: ${({ isLoading }) => (isLoading ? '#1acb7860' : '#1acb78')};

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  color: '#fff',
  size: 'small',
})``;
