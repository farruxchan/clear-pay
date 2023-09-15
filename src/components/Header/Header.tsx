import { appLanguages } from "../../utils/appLanguages";
import { AppImage } from "../UI/AppImage/AppImage";
import { AppInput } from "../UI/AppInput/AppInput";
import { AppSelect } from "../UI/AppSelect/AppSelect";
import { AppElem } from "../AppElem/AppElem";
import { AppSettings, StyledHeader } from "./Header.style";
import { colors } from "../../theme/colors";

export const Header = () => {
  return (
    <StyledHeader>
      <AppInput
        bgc="transparent"
        borderColor={colors.gray}
        placeholder="Поиск"
        hasError={false}
        iconName="search"
      />
      <AppSettings>
        <div className="languageSelect">
          <AppImage
            imgSrc="flags/ru-flag.png"
            imgAlt="RUS"
            height="22"
            width="22"
            borderRadius="50%"
          />
          <AppSelect variants={appLanguages} />
        </div>
        <AppElem elemImg="users/usachev.jpeg" elemName="Дмитрий Усачев" />
      </AppSettings>
    </StyledHeader>
  );
};
