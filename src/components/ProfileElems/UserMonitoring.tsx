import React from "react";
import { StyledUserMonitoring } from "./ProfileElems.style";
import { Statistics } from "./Statistics";

interface IUserMonitoringProps {}

export const UserMonitoring = ({}: IUserMonitoringProps) => {
  return (
    <StyledUserMonitoring>
      <Statistics />
    </StyledUserMonitoring>
  );
};
