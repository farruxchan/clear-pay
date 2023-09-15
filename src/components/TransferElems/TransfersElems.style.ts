import styled from "styled-components";
import { AppWidgetsStyles } from "../../theme/globalStyle";

export const StyledRecentTransfers = styled.div`
  ${AppWidgetsStyles}

  flex: 1 1 auto;

  .RecentElem {
    padding: 25px 35px;
    background-color: ${(props) => props.theme.colors.bgc};
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 20px;
    }

    .date {
      display: flex;
      align-items: center;
      column-gap: calc(0.8vw + 5.2px); //? 20 | 8

      p {
        text-align: right;
      }
    }
  }
`;

export const StyledTransferBlock = styled.div`
  ${AppWidgetsStyles}

  flex: 0 1 40%;

  .inputWrapper {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .transferPart {
    margin-bottom: 45px;
  }
`;

export const StyledTransferElem = styled.div`
  ${AppWidgetsStyles}

  flex: 1 1 40%;

  p {
    margin-bottom: 20px;
  }

  .cardDetails {
    margin-top: 30px;
    display: flex;
    gap: 30px;

    .validityPeriod {
      flex: 0 1 40%;
    }

    .cardName {
      flex: 1 1 auto;
    }
  }
`;

export const StyledEnrollment = styled.div`
  ${AppWidgetsStyles}

  flex: 1 1 20%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    /* margin-bottom: 20px; */
  }

  select {
    background-color: ${(props) => props.theme.colors.bgc};
  }
`;
