import { StyledUserInfoBlock } from "./ProfileElems.style";
import { UserBio } from "./UserBio";

interface IUserInfoBlockProps {}

export const UserInfoBlock = ({}: IUserInfoBlockProps) => {
  return (
    <StyledUserInfoBlock>
      <UserBio />
    </StyledUserInfoBlock>
  );
};
