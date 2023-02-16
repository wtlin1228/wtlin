import primitives from '@wtlin/primitives';
import { fontStack } from './utils/theme';

const animation = {
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
};

const borderWidths = [0, '1px'];

const breakpoints = ['544px', '768px', '1012px', '1280px'];

const fonts = {
  normal: fontStack([
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
  ]),
  mono: fontStack([
    'SFMono-Regular',
    'Consolas',
    'Liberation Mono',
    'Menlo',
    'Courier',
    'monospace',
  ]),
};

const fontSizes = [
  '12px',
  '14px',
  '16px',
  '20px',
  '24px',
  '32px',
  '40px',
  '48px',
];

const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600,
};

const lineHeights = {
  condensedUltra: 1,
  condensed: 1.25,
  default: 1.5,
};

const radii = ['0', '3px', '6px', '100px'];

const sizes = {
  small: '544px',
  medium: '768px',
  large: '1012px',
  xlarge: '1280px',
};

const space = [
  '0',
  '4px',
  '8px',
  '16px',
  '24px',
  '32px',
  '40px',
  '48px',
  '64px',
  '80px',
  '96px',
  '112px',
  '128px',
];

const colorSchemes = Object.entries(primitives.colors).reduce<
  Record<string, { colors: Partial<typeof primitives.colors.light> }>
>((acc, [name, colorScheme]) => {
  acc[name] = {
    colors: colorScheme,
  };
  return acc;
}, {});

const theme = {
  animation,
  borderWidths,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  sizes,
  space,
  colorSchemes,
};

export default theme;
