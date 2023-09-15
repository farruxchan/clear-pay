import React from "react";
import { StyledStatistics } from "./ProfileElems.style";

interface IStatisticsProps {}

export const Statistics = ({}: IStatisticsProps) => {
  return (
    <StyledStatistics>
      <p>Статистика за месяц</p>
    </StyledStatistics>
  );
};
