import { AppElem } from "../AppElem/AppElem";
import { userData } from "./ProfileElems.data";
import { StyledUserBio } from "./ProfileElems.style";

interface IUserBioProps {}

export const UserBio = ({}: IUserBioProps) => {
  return (
    <StyledUserBio>
      <AppElem
        elemName={`${userData.name} ${userData.surname}`}
        elemImg={userData.img}
        elemStatus={userData.status}
        imgHeight="126"
        imgWidth="126"
      />
      <div className="userBio">
        <div className="userInfo">
          <p className="secondaryText info">Фамилия:</p>
          <p className="value">{userData.surname}</p>
        </div>
        <div className="userInfo">
          <p className="secondaryText info">Имя:</p>
          <p className="value">{userData.name}</p>
        </div>
        <div className="userInfo">
          <p className="secondaryText info">Номер:</p>
          <p className="value">{userData.phoneNumber}</p>
        </div>
        <div className="userInfo">
          <p className="secondaryText info">E-mail:</p>
          <p className="value">{userData.eMail}</p>
        </div>
        <div className="userInfo">
          <p className="secondaryText info">Страна:</p>
          <p className="value">{userData.country}</p>
        </div>
      </div>
    </StyledUserBio>
  );
};
