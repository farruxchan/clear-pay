export interface IUserData {
  status: string;
  name: string;
  surname: string;
  phoneNumber: string;
  eMail: string;
  country: string;
  img: string;
}

export const userData: IUserData = {
  status: "Пользователь",
  name: "Дмитрий",
  surname: "Усачев",
  phoneNumber: "+998(91)111-11-11",
  eMail: "dbank@gmail.com",
  country: "Узбекистан",
  img: "users/usachev.jpeg",
};
