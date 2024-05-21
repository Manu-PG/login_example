declare type userLogin = {
  _id?: string;
  userName: string;
  password: string;
  role?: "user" | "admin";
  isRememberChecked?: boolean;
};
