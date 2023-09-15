import styled, { css } from "styled-components";

interface IStyledImgProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const StyledImg = styled.div<IStyledImgProps>`
  overflow: hidden;

  ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius};
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `};
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `};

  border: 1px solid ${(props) => props.theme.colors.lightGray};

  .userImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
    text-align: center;
    background-color: ${(props) => props.theme.colors.primeColor};
    color: white;
    line-height: ${(props) => props.height}px;
  }
`;
