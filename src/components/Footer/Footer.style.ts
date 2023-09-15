import styled from "styled-components";

export const StyledFooter = styled.div`
  flex: 0 1 auto;

  background-color: ${(props) => props.theme.colors.footerBgc};
  color: ${(props) => props.theme.colors.invertedTextColor};
  padding: 100px;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 100px;
  flex-wrap: wrap;

  .footerLink {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }

  .linksHeading {
    color: ${(props) => props.theme.colors.gray};
    text-transform: uppercase;
    font-weight: 600;
  }
`;
