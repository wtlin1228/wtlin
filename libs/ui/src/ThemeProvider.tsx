import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import defaultTheme from './default-theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Theme = { [key: string]: any };

export type ThemeProviderProps = {
  theme?: Theme;
};

export const ThemeProvider: React.FC<
  React.PropsWithChildren<ThemeProviderProps>
> = ({ theme, children }) => {
  return (
    <EmotionThemeProvider theme={theme ?? defaultTheme}>
      {children}
    </EmotionThemeProvider>
  );
};
