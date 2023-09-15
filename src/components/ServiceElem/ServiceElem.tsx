import { colors } from "../../theme/colors";
import { AppIcon } from "../UI/AppIcon/AppIcon";
import { StyledServiceElem } from "./ServiceElem.style";

interface IServiceElemProps {
  serviceTitle: string;
  serviceIcon: string;
}

export const ServiceElem = ({
  serviceTitle,
  serviceIcon,
}: IServiceElemProps) => {
  return (
    <StyledServiceElem>
      <AppIcon
        name={serviceIcon}
        fill={colors.primeColor}
        height="42"
        width="42"
      />
      <p>{serviceTitle}</p>
    </StyledServiceElem>
  );
};
