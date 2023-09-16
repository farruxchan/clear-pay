import styled from "styled-components";

export const StyledHeader = styled.header`
  flex: 0 1 auto;

  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.mainTextColor};
  padding: 25px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .languageSelect {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const AppSettings = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  .AppImage {
    flex: 1 0 22px;
  }
`;
