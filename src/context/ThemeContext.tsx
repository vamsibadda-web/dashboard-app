import { createContext, useContext, useState } from "react";

type ThemeContextType = {
  dark: boolean;
  setDark: (val: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProviderCustom = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProviderCustom");
  }

  return context;
};