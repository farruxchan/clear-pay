import { AppInput } from "../AppInput/AppInput";
import { AppSelect } from "../AppSelect/AppSelect";
import { StyledInputSelect } from "./AppInputSelect.style";

interface IAppInputSelectProps {
  variants: any[];
}

export const AppInputSelect = ({ variants }: IAppInputSelectProps) => {
  return (
    <StyledInputSelect>
      <AppInput />
      <div className="divider"></div>
      <AppSelect variants={variants} />
    </StyledInputSelect>
  );
};
