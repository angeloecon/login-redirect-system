import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const signIn = (email: string) => {
    setUserName(email.slice(0, email.indexOf("@")).trim());
    setEmail(email.trim());
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setIsLoggedIn(false);
    setUserName("");
    setEmail("");
  };

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, isLoggedIn, userName, email }}
    >
      {children}
    </AuthContext.Provider>
  );
};
