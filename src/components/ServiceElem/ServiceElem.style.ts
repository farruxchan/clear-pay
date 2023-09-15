import styled from "styled-components";

export const StyledServiceElem = styled.div`
  /* flex: 0 1 140px; */

  padding: 24px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 3px 30px 0px ${(props) => props.theme.colors.elemsShadowLight};
  text-align: center;
  color: ${(props) => props.theme.colors.primeColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
