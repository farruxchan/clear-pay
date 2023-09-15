import { AppPage } from "../components/AppPage/AppPage.style";
import { UserInfoBlock } from "../components/ProfileElems/UserInfoBlock";
import { UserMonitoring } from "../components/ProfileElems/UserMonitoring";
import { PageElemsWrapper } from "../theme/globalStyle";

export const ProfilePage = () => {
  return (
    <AppPage>
      <h1>Личный кабинет</h1>
      <PageElemsWrapper>
        <UserInfoBlock />
        <UserMonitoring />
      </PageElemsWrapper>
    </AppPage>
  );
};
