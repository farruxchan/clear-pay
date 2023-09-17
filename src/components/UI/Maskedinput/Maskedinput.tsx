//@ts-nocheck
import React from "react";
import { MaskedInput, InputWrapper } from "./Maskedinput.styled";
import { AppIcon } from "../AppIcon/AppIcon";

interface IAppInputProps {
    borderColor?: string;
    iconName?: string;
    bgc?: string;
    isDisabled?: boolean;
    hasError?: boolean;
    errorMessage?: string;
    format: string
}

export const AppMaskedInput = ({
    type,
    name,
    bgc,
    borderColor,
    iconName,
    hasError = false,
    errorMessage = "Ошибка!",
    isDisabled = false,
    format,
    ...props
}: IAppInputProps) => {
    return (
        <InputWrapper className="inputWrapper" hasError={hasError}>
            <MaskedInput
                bgc={bgc}
                borderColor={borderColor}
                type={type}
                name={name}
                disabled={isDisabled}
                format={format}
                {...props}
            />
            {hasError && <p className="errorMessage">{errorMessage}</p>}
            {iconName && <AppIcon className="inputIcon" name={iconName} />}
        </InputWrapper>
    );
};
