import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter";
    color: ${(props) => props.theme.colors.mainTextColor};
    background-color: ${(props) => props.theme.colors.bodyBgc};
    font-size: 20px;
  }

  html, body {
    height: 100%;
  }

  button,
  input, select {
    border: 1px solid transparent;
    outline: 0;
    font-family: inherit;
    background-color: transparent;
    font-size: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    
    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: inherit;
    }
  }

  h1 {
    margin: 0 0 calc(1.9vw + 23px) 0; //? 60 | 30
    font-size: calc(0.7vw + 22.5px); //? 36 | 25
    /* font-weight: 600; */
  }

  h3 {
    margin: 0 0 calc(1vw + 20.3px) 0; //? 40 | 24
    font-size: calc(0.2vw + 20.3px); //? 24 | 21
    font-weight: 500;
  }

  h5 {
    font-size: calc(0.4vw + 16.6px);
    font-weight: 500;
  }

  p {
    font-size: calc(0.3vw + 13.8px); //? 20 | 15
  }

  .secondaryText {
    color: ${(props) => props.theme.colors.gray};
  }

  ._noSelect {
    -webkit-touch-callout: none; //? iOS Safari
    -webkit-user-select: none; //? Safari
    -khtml-user-select: none; //? Konqueror HTML
    -moz-user-select: none; //? Old versions of Firefox
    -ms-user-select: none; //? Internet Explorer/Edge
    user-select: none; //? Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox
  }
`;

export const AppWidgetsStyles = `
  border-radius: 16px;
  background: ${colors.white};
  box-shadow: 0px 3px 30px 0px ${colors.elemsShadowLight};
  padding: calc(1vw + 26.5px) calc(1.6vw + 14.2px); //? 45 - 30 | 45 - 20
`;

export const PageElemsWrapper = styled.div`
  display: flex;
  gap: 32px;
  row-gap: 40px;
  margin-bottom: 32px;
`;
