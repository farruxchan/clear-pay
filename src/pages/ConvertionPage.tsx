import { AppPage } from "../components/AppPage/AppPage.style";
import { ExchangeCalculator } from "../components/ConvertionElems/ExchangeCalculator";
import { ExchangeRate } from "../components/ConvertionElems/ExchangeRate";
import { Enrollment } from "../components/TransferElems/Enrollment";
import { TransferElem } from "../components/TransferElems/TransferElem";
import { PageElemsWrapper } from "../theme/globalStyle";

export const ConvertionPage = () => {
  return (
    <AppPage>
      <PageElemsWrapper>
        <ExchangeRate />
        <ExchangeCalculator />
      </PageElemsWrapper>
      <h1>Купить или продать валюту</h1>
      <PageElemsWrapper>
        <TransferElem transferType="Счет списания" />
        <TransferElem transferType="Счет зачисления" />
        <Enrollment />
      </PageElemsWrapper>
    </AppPage>
  );
};
