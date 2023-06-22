import { createContext, useState, useContext, ReactNode } from "react";

interface AppContextData {
  isLogined: boolean;
  setIsLogined: (flag:boolean)=>void;
}

export const AppProvider = createContext<AppContextData | null>(null);

export const useAppContext = () => {
  return useContext(AppProvider);
};

interface RecordsProviderProps {
	children: ReactNode;
}

const ThemeContext = ({ children }:RecordsProviderProps) => {
  const [isLogined, setIsLogined] = useState(false);

  return (
    <AppProvider.Provider value={{
      isLogined,
      setIsLogined
    }}>
      {children}
    </AppProvider.Provider>
  );
};

export default ThemeContext;
