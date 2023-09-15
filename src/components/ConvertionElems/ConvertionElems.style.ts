import styled from "styled-components";
import { AppWidgetsStyles } from "../../theme/globalStyle";

export const RateWrapper = styled.div`
  flex: 1 1 auto;
`;

export const StyledExchangeRate = styled.div`
  ${AppWidgetsStyles}

  .table {
    margin-bottom: 30px;
  }

  .line {
    width: 100%;

    display: grid;
    grid-template-columns: 2fr repeat(3, 1fr);
    align-items: center;
    padding-bottom: 20px;

    &:last-child {
      border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
    }

    &:not(:first-child) {
      padding: 20px 0;
      border-top: 1px solid ${(props) => props.theme.colors.lightGray};
    }
  }

  .rate {
    flex: 1 1;
    text-align: center;
  }
`;

export const CalculatorWrapper = styled.div`
  flex: 0 1 35%;
  position: relative;

  button {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    border-radius: 16px;
  }
`;

export const StyledExchangeCalculator = styled.div`
  ${AppWidgetsStyles}

  h5 {
    margin-bottom: 40px;
  }

  .wannaSell {
    margin-bottom: 50px;
  }
`;
