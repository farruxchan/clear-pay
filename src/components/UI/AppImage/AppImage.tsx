import { StyledImg } from "./AppImage.style";

interface IAppImageProps {
  imgSrc?: string | undefined;
  userInitials?: string | undefined;
  imgAlt: string;
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

export const AppImage = ({
  imgSrc,
  imgAlt,
  className,
  userInitials,
  width = "50",
  height = "50",
  borderRadius,
}: IAppImageProps) => {
  return (
    <StyledImg
      width={width}
      height={height}
      borderRadius={borderRadius}
      className="AppImage"
    >
      {imgSrc ? (
        <img className="userImage" src={`./img/${imgSrc}`} alt={imgAlt} />
      ) : (
        <div className="userImage">{userInitials}</div>
      )}
    </StyledImg>
  );
};
