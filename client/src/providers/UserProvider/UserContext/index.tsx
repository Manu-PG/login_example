import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  user: userLogin | undefined;
  setUser: React.Dispatch<React.SetStateAction<userLogin | undefined>>;
};

const UserContext = createContext<UserContextType>({
  user: undefined,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<userLogin>();

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
