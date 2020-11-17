import styled from 'styled-components/native';

export const LogList = styled.ScrollView.attrs({
  stickyHeaderIndices: [0],
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingTop: 60 },
})`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 60px;

  border-width: 2px;
  margin-bottom: 8px;
  border-radius: 4px;
  border-color: #1acb78;

  align-items: center;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  color: #1acb78;
  font-size: 16px;
`;
