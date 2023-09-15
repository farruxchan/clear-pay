import React from "react";
import { StyledRecentTransfers } from "./TransfersElems.style";
import { AppElem } from "../AppElem/AppElem";
import { AppIcon } from "../UI/AppIcon/AppIcon";
import { colors } from "../../theme/colors";
import { AppLink } from "../UI/AppLink/AppLink";
import { transfersData } from "./Transfers.data";

interface IRecentTransfersProps {}

export const RecentTransfers = ({}: IRecentTransfersProps) => {
  return (
    <StyledRecentTransfers>
      <h3>Последние переводы</h3>
      {transfersData.map((transfer) => (
        <div key={transfer.name} className="RecentElem">
          <AppElem elemName={transfer.name} elemStatus={transfer.number} />
          <div className="date">
            <div className="descriptionElem">
              <p className="mainText">{transfer.day}</p>
              <p className="secondaryText">{transfer.time}</p>
            </div>
            <AppIcon name="transfers-modern" fill={colors.primeColor} />
          </div>
        </div>
      ))}

      <AppLink hasIcon linkLabel="Показать еще" />
    </StyledRecentTransfers>
  );
};
