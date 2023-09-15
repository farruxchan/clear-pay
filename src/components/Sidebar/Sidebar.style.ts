import styled from "styled-components";

export let sideBarWidth = "20%";

export const StyledSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  height: 100%;
  width: ${sideBarWidth};

  background-color: ${(props) => props.theme.colors.primeColor};
  color: ${(props) => props.theme.colors.invertedTextColor};
  padding: 30px 40px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

    li {
      font-size: calc(0.1vw + 19.5px); //? 22 | 20
      line-height: 125%;

      list-style: none;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 25px;

    padding: 10px 15px;
    border-radius: 10px;
    transition: 300ms cubic-bezier(0, 0, 0.2, 1);

    &:hover {
      text-decoration: none;
      background-color: ${(props) => props.theme.colors.primeColorLight};
    }

    &:active {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.primeColor};
      svg {
        fill: ${(props) => props.theme.colors.primeColor};
      }
    }

    &._active {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.primeColor};
      box-shadow: 0 0 10px ${(props) => props.theme.colors.white};
      svg {
        fill: ${(props) => props.theme.colors.primeColor};
      }
    }
  }

  .logo,
  .logo_small {
    cursor: pointer;
    display: inline-block;
    margin-bottom: 120px;
    transition: 200ms;

    &:hover {
      filter: drop-shadow(0 0 3px ${(props) => props.theme.colors.white});
    }
  }

  .logo_small {
    display: none;
    padding: 10px;
    margin-bottom: 60px;
    background-color: white;
    border-radius: 10px;
  }

  @media (max-width: 1230px) {
    .logo {
      display: none;
    }

    .logo_small {
      display: inline-block;
    }

    .route {
      display: none;
    }
  }
`;
