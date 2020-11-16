import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  background: #fff;
  padding: ${Constants.statusBarHeight + 20}px 20px 0;

  flex: 1;
  align-items: center;
  justify-content: center;
`;
