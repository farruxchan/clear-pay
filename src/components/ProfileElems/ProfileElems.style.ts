import styled from "styled-components";
import { AppWidgetsStyles } from "../../theme/globalStyle";

export const StyledUserInfoBlock = styled.div`
  flex: 0 1 auto;
`;

export const StyledUserBio = styled.div`
  ${AppWidgetsStyles}

  .AppElem {
    margin-bottom: 45px;

    .mainText {
      font-size: calc(0.4vw + 16.6px);
    }
  }

  .userBio {
  }

  .userInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 25px;
    }

    .info {
      flex: 1 1 50%;
    }

    .value {
      flex: 1 1 50%;
      text-align: left;
    }
  }
`;

export const StyledUserMonitoring = styled.div`
  flex: 1 1 auto;
`;

export const StyledStatistics = styled.div`
  ${AppWidgetsStyles}
`;
