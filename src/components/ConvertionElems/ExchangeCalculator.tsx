import { AppButton } from "../UI/AppButton/AppButton";
import { AppInputSelect } from "../UI/AppInputSelect/AppInputSelect";
import { calculatorData } from "./Conversation.data";
import {
  CalculatorWrapper,
  StyledExchangeCalculator,
} from "./ConvertionElems.style";

interface IExchangeCalculatorProps {}

export const ExchangeCalculator = ({}: IExchangeCalculatorProps) => {
  return (
    <CalculatorWrapper>
      <h1>Калькулятор</h1>
      <StyledExchangeCalculator>
        <div className="wannaSell">
          <h5>Хочу продать</h5>
          <AppInputSelect variants={calculatorData} />
        </div>
        <div className="willGet">
          <h5>Получу</h5>
          <AppInputSelect variants={calculatorData} />
        </div>
      </StyledExchangeCalculator>
      <AppButton buttonLabel="Рассчитать" isDisabled={false} />
    </CalculatorWrapper>
  );
};
