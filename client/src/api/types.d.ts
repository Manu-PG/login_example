declare type userLogin = {
  id?: string;
  userName: string;
  password: string;
  role?: "user" | "admin";
  isRememberChecked?: boolean;
};
