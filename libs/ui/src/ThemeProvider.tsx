import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import defaultTheme from './default-theme';

const colorModeLocalStorageKey = 'wtlin-ui-color-mode';
const defaultColorMode = 'dark';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Theme = { [key: string]: any };
type ColorMode = 'light' | 'dark';

export type ThemeProviderProps = {
  theme?: Theme;
};

const ThemeContext = React.createContext<{
  theme?: Theme;
  colorMode: ColorMode;
  setColorMode: (nextColorMode: ColorMode) => void;
}>({
  colorMode: defaultColorMode,
  setColorMode: () => null,
});

export const ThemeProvider: React.FC<
  React.PropsWithChildren<ThemeProviderProps>
> = ({ children, ...props }) => {
  const theme = props.theme ?? defaultTheme;
  const [colorMode, setColorMode] = React.useState<ColorMode>(defaultColorMode);

  const handleColorModeChange = React.useCallback(
    (nextColorMode: ColorMode) => {
      const currentColorMode = localStorage.getItem(colorModeLocalStorageKey);
      if (nextColorMode === currentColorMode) {
        return;
      }

      // clear previous color mode
      if (currentColorMode && validateColorMode(currentColorMode)) {
        document.documentElement.classList.remove(
          getColorModeClassName(currentColorMode)
        );
      }

      // set next color mode
      localStorage.setItem(colorModeLocalStorageKey, nextColorMode);
      document.documentElement.classList.add(
        getColorModeClassName(nextColorMode)
      );
      setColorMode(nextColorMode);
    },
    []
  );

  React.useEffect(() => {
    const currentColorMode = localStorage.getItem(colorModeLocalStorageKey);

    if (currentColorMode && validateColorMode(currentColorMode)) {
      handleColorModeChange(currentColorMode);
      setColorMode(currentColorMode);
    }
  }, [handleColorModeChange]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        colorMode,
        setColorMode: handleColorModeChange,
      }}
    >
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return React.useContext(ThemeContext);
}

function validateColorMode(colorMode: string): colorMode is ColorMode {
  return ['light', 'dark'].includes(colorMode);
}

function getColorModeClassName(colorMode: ColorMode) {
  return `wtlin-ui-${colorMode}`;
}

export default ThemeProvider;
