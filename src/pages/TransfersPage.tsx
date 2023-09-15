import { AppPage } from "../components/AppPage/AppPage.style";
import { ServicePayments } from "../components/ServicePayments/ServicePayments";
import { RecentTransfers } from "../components/TransferElems/RecentTransfers";
import { TransferBlock } from "../components/TransferElems/TransferBlock";
import { PageElemsWrapper } from "../theme/globalStyle";

export const TransfersPage = () => {
  return (
    <AppPage>
      <h1>Переводы</h1>
      <PageElemsWrapper>
        <TransferBlock />
        <RecentTransfers />
      </PageElemsWrapper>
      <ServicePayments />
    </AppPage>
  );
};
