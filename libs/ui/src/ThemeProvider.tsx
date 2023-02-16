import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import deepmerge from 'deepmerge';
import defaultTheme from './default-theme';

const defaultColorMode = 'day';
const defaultDayScheme = 'light';
const defaultNightScheme = 'dark';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Theme = { [key: string]: any };
type ColorMode = 'day' | 'night' | 'light' | 'dark';
type ColorModeWithAuto = ColorMode | 'auto';

export type ThemeProviderProps = {
  theme?: Theme;
  colorMode?: ColorModeWithAuto;
  dayScheme?: string;
  nightScheme?: string;
};

const ThemeContext = React.createContext<{
  theme?: Theme;
  colorScheme?: string;
  colorMode?: ColorModeWithAuto;
  resolvedColorMode?: ColorMode;
  resolvedColorScheme?: string;
  dayScheme?: string;
  nightScheme?: string;
  setColorMode: React.Dispatch<React.SetStateAction<ColorModeWithAuto>>;
  setDayScheme: React.Dispatch<React.SetStateAction<string>>;
  setNightScheme: React.Dispatch<React.SetStateAction<string>>;
}>({
  setColorMode: () => null,
  setDayScheme: () => null,
  setNightScheme: () => null,
});

export const ThemeProvider: React.FC<
  React.PropsWithChildren<ThemeProviderProps>
> = ({ children, ...props }) => {
  // Get fallback values from parent ThemeProvider (if exists)
  const {
    theme: fallbackTheme,
    colorMode: fallbackColorMode,
    dayScheme: fallbackDayScheme,
    nightScheme: fallbackNightScheme,
  } = useTheme();

  // Initialize state
  const theme = props.theme ?? fallbackTheme ?? defaultTheme;

  const [colorMode, setColorMode] = React.useState(
    props.colorMode ?? fallbackColorMode ?? defaultColorMode
  );
  const [dayScheme, setDayScheme] = React.useState(
    props.dayScheme ?? fallbackDayScheme ?? defaultDayScheme
  );
  const [nightScheme, setNightScheme] = React.useState(
    props.nightScheme ?? fallbackNightScheme ?? defaultNightScheme
  );

  const systemColorMode = useSystemColorMode();
  const resolvedColorMode = resolveColorMode(colorMode, systemColorMode);
  const colorScheme = chooseColorScheme(
    resolvedColorMode,
    dayScheme,
    nightScheme
  );
  const { resolvedTheme, resolvedColorScheme } = React.useMemo(
    () => applyColorScheme(theme, colorScheme),
    [theme, colorScheme]
  );

  // Update state if props change
  React.useEffect(() => {
    setColorMode(props.colorMode ?? fallbackColorMode ?? defaultColorMode);
  }, [props.colorMode, fallbackColorMode]);

  React.useEffect(() => {
    setDayScheme(props.dayScheme ?? fallbackDayScheme ?? defaultDayScheme);
  }, [props.dayScheme, fallbackDayScheme]);

  React.useEffect(() => {
    setNightScheme(
      props.nightScheme ?? fallbackNightScheme ?? defaultNightScheme
    );
  }, [props.nightScheme, fallbackNightScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: resolvedTheme,
        colorScheme,
        colorMode,
        resolvedColorMode,
        resolvedColorScheme,
        dayScheme,
        nightScheme,
        setColorMode,
        setDayScheme,
        setNightScheme,
      }}
    >
      <EmotionThemeProvider theme={resolvedTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return React.useContext(ThemeContext);
}

function useSystemColorMode() {
  const [systemColorMode, setSystemColorMode] =
    React.useState(getSystemColorMode);

  React.useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    function handleChange(event: MediaQueryListEvent) {
      const isNight = event.matches;
      setSystemColorMode(isNight ? 'night' : 'day');
    }

    if (media && media.addEventListener !== undefined) {
      media.addEventListener('change', handleChange);
      return function cleanup() {
        media.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return systemColorMode;
}

function getSystemColorMode(): ColorMode {
  if (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
  ) {
    return 'night';
  }

  return 'day';
}

function resolveColorMode(
  colorMode: ColorModeWithAuto,
  systemColorMode: ColorMode
) {
  switch (colorMode) {
    case 'auto':
      return systemColorMode;
    default:
      return colorMode;
  }
}

function chooseColorScheme(
  colorMode: ColorMode,
  dayScheme: string,
  nightScheme: string
) {
  switch (colorMode) {
    case 'day':
    case 'light':
      return dayScheme;
    case 'dark':
    case 'night':
      return nightScheme;
  }
}

function applyColorScheme(
  theme: Theme,
  colorScheme: string
): { resolvedTheme: Theme; resolvedColorScheme: string | undefined } {
  if (!theme.colorSchemes) {
    return {
      resolvedTheme: theme,
      resolvedColorScheme: undefined,
    };
  }

  if (!theme.colorSchemes[colorScheme]) {
    // eslint-disable-next-line no-console
    console.error(
      `\`${colorScheme}\` scheme not defined in \`theme.colorSchemes\``
    );

    // Apply the first defined color scheme
    const defaultColorScheme = Object.keys(theme.colorSchemes)[0];
    return {
      resolvedTheme: deepmerge(theme, theme.colorSchemes[defaultColorScheme]),
      resolvedColorScheme: defaultColorScheme,
    };
  }

  return {
    resolvedTheme: deepmerge(theme, theme.colorSchemes[colorScheme]),
    resolvedColorScheme: colorScheme,
  };
}

export default ThemeProvider;
