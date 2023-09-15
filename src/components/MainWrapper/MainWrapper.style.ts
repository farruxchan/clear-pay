import styled from "styled-components";
import { sideBarWidth } from "../Sidebar/Sidebar.style";

export const StyledMainWrapper = styled.div`
  padding-left: ${sideBarWidth};

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.bgc};
`;
