import React, { createContext, useState, useCallback, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GlobalStyle } from '../styles/GlobalStyles';
import { ThemeProvider as ThemeStyled } from 'styled-components';

import theme from '../styles/theme';

interface ThemeContextData {
  lockScroll: boolean;
  lock(lockBool: boolean): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [lockScroll, setLockScroll] = useState(false);

  const lock = useCallback(
    (lockBool: boolean) => {
      if (lockBool) {
        setLockScroll(!lockScroll);
      } else {
        setLockScroll(lockBool);
      }
    },
    [lockScroll]
  );

  return (
    <ThemeStyled theme={theme}>
      <ThemeContext.Provider value={{ lockScroll, lock }}>
        <GlobalStyle lock={lockScroll} />
        {children}
      </ThemeContext.Provider>
    </ThemeStyled>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
