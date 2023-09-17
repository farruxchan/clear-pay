import { AppIcon } from "../AppIcon/AppIcon";
import { StyledLink } from "./AppLink.style";

export interface IAppLinkProps {
  linkLabel: string;
  align?: "right" | "left";
  hasIcon?: boolean;
}

export const AppLink = ({ linkLabel, align, hasIcon }: IAppLinkProps) => {
  return (
    <StyledLink $hasIcon={hasIcon} align={align}>
      <span className="linkLabel">{linkLabel}</span>
      {hasIcon && (
        <AppIcon className="linkIcon" name="arrow" width="12" height="10" />
      )}
    </StyledLink>
  );
};
