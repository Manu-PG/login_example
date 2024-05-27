declare type userLogin = {
  id?: string;
  username: string;
  password: string;
  role?: "user" | "admin";
  isRememberChecked?: boolean;
};

declare type RequestStatus = "idle" | "loading" | "done" | "error";
