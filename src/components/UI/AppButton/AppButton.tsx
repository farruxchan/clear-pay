import React from "react";
import { Button } from "./AppButton.style";

export interface IButtonProps {
  buttonLabel: string;
  isDisabled: boolean;
}

export const AppButton = ({
  buttonLabel = "Перевести",
  isDisabled,
  ...props
}: IButtonProps) => {
  return (
    <Button disabled={isDisabled} {...props}>
      {buttonLabel}
    </Button>
  );
};
