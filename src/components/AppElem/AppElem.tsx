import { AppImage } from "../UI/AppImage/AppImage";
import { StyledAppElem } from "./AppElem.style";

interface IUserElemProps {
  elemImg?: string;
  elemName: string;
  elemStatus?: string;
  imgHeight?: string;
  imgWidth?: string;
}

export const AppElem = ({
  elemImg,
  elemName,
  elemStatus,
  imgHeight,
  imgWidth,
}: IUserElemProps) => {
  const elemInitials = elemName[0];

  return (
    <StyledAppElem className="AppElem">
      <AppImage
        imgSrc={elemImg}
        userInitials={elemInitials}
        imgAlt="user"
        borderRadius="50%"
        height={imgHeight}
        width={imgWidth}
      />
      <div className="elemDescription">
        <p className="mainText">{elemName}</p>
        {elemStatus && <p className="secondaryText">{elemStatus}</p>}
      </div>
    </StyledAppElem>
  );
};
