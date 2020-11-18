import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const LogList = styled.ScrollView.attrs({
  stickyHeaderIndices: [0],
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 40 },
})`
  flex: 1;
  width: 100%;
  margin-top: 54px;
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;

  background: #fff;
  border-width: 2px;
  border-radius: 4px;
  border-color: #1acb78;
  margin-top: ${Constants.statusBarHeight + 20}px;

  align-items: center;
  justify-content: center;

  z-index: 20;
  position: absolute;
`;

export const HeaderText = styled.Text`
  color: #1acb78;
  font-size: 16px;
`;
