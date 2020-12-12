import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: #fff;

  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  color: '#1acb78',
  size: 'large',
})``;
