import { Container } from "../components/Container/Container.style";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { StyledMainWrapper } from "../components/MainWrapper/MainWrapper.style";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { sidebarData } from "../components/Sidebar/Sidebar.data";
import { StyledOutlet } from "../components/StyledOutlet/StyledOutlet";

export const AppLayout = () => {
  return (
    <>
      <Sidebar links={sidebarData} />
      <StyledMainWrapper>
        <Header />
        <Container>
          <StyledOutlet />
        </Container>
        <Footer />
      </StyledMainWrapper>
    </>
  );
};
