import { AppButton } from "../UI/AppButton/AppButton";
import { AppInput } from "../UI/AppInput/AppInput";
import { AppLink } from "../UI/AppLink/AppLink";
import { AppMaskedInput } from "../UI/Maskedinput/Maskedinput";
import { StyledTransferBlock } from "./TransfersElems.style";
import { } from "react-hook-form";

interface ITransferBlockProps {}

export const TransferBlock = ({}: ITransferBlockProps) => {
  return (
    <StyledTransferBlock>
      <div className="transferPart transferIn">
        <h3>Счет списания</h3>
        <AppMaskedInput
          // @ts-ignore
          placeholder="Номер карты"
          // @ts-ignore
          iconName="card"
          format="#### #### #### ####"
        />
        <AppMaskedInput
          // @ts-ignore
          placeholder="Сумма перевода"
          // @ts-ignore
          iconName="card"
          format="## ### ###"
        />
        <AppMaskedInput
        // @ts-ignore
        placeholder="Счёт зачисления"
        // @ts-ignore
        iconName="card"
        format="#### #### #### ####"
        />
        <AppLink align="right" linkLabel="Выбрать по номеру телефона" />
      </div>
      <div className="transferPart transferOut">
        <h3>Счет зачисления</h3>
        <AppInput hasError={false} placeholder="Номер карты" iconName="card" />
        <AppLink align="right" linkLabel="Выбрать по номеру телефона" />
      </div>
      <AppButton buttonLabel="Перевести" isDisabled={false} />
    </StyledTransferBlock>
  );
};