import { AppElem } from "../AppElem/AppElem";
import { AppLink } from "../UI/AppLink/AppLink";
import { RateWrapper, StyledExchangeRate } from "./ConvertionElems.style";
import { exchangeRateData } from "./Conversation.data";

interface IExchangeRateProps {}

export const ExchangeRate = ({}: IExchangeRateProps) => {
  return (
    <RateWrapper>
      <h1>Курс валют</h1>
      <StyledExchangeRate>
        <div className="table">
          <div className="line">
            <h5>Валюта</h5>
            <h5 className="rate">Курс ЦБ</h5>
            <h5 className="rate">Покупка</h5>
            <h5 className="rate">Продажа</h5>
          </div>
          {exchangeRateData.map((cur) => (
            <div className="line" key={cur.name}>
              <div className="currency">
                <AppElem
                  elemName={cur.name}
                  elemStatus={cur.fullName}
                  elemImg={cur.img}
                />
              </div>
              <div className="rate centralBank">{cur.centralBank}</div>
              <div className="rate buy">{cur.buy}</div>
              <div className="rate sell">{cur.sell}</div>
            </div>
          ))}
        </div>
        <AppLink linkLabel="Показать другие валюты" hasIcon />
      </StyledExchangeRate>
    </RateWrapper>
  );
};
