import styled from "styled-components";
import { AppWidgetsStyles } from "../../theme/globalStyle";

export const StyledServicePayments = styled.div`
  ${AppWidgetsStyles}

  position: relative;

  .nextSlideBtn {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: calc(1.6vw + 14.2px);
    translate: 0 -50%;
    z-index: 10;
    transition: 200ms;

    &:hover {
      filter: drop-shadow(0 0 10px ${(props) => props.theme.colors.primeColor});
      scale: 1.1;
    }

    &:active {
      scale: 0.9;
    }
  }
`;

export const SlidesWrapper = styled.div`
  cursor: grab;
  border: 2px solid greenyellow;
  padding: 0 120px;
  /* display: flex; */
  /* gap: 32px; */
`;
