import { createContext, useState, useContext, ReactNode } from "react";

interface AppContextData {
  sideSearchbarOpen: boolean;
  toggleSideSearchbar: ()=>void;
}

export const AppProvider = createContext<AppContextData | null>(null);

export const useToggle = () => {
  return useContext(AppProvider);
};

interface RecordsProviderProps {
	children: ReactNode;
}

const ThemeContext = ({ children }:RecordsProviderProps) => {
  const [sideSearchbarOpen, setSideSearchbarOpen] = useState(false);

  const toggleSideSearchbar = () => {
    setSideSearchbarOpen(!sideSearchbarOpen);
  };


  return (
    <AppProvider.Provider value={{
      sideSearchbarOpen,
      toggleSideSearchbar
    }}>
      {children}
    </AppProvider.Provider>
  );
};

export default ThemeContext;
