import primitives from '@wtlin/primitives';
import { toCssCustomProperties, fontStack } from './utils/theme';
import { CSS_CUSTOM_PROPERTY_PREFIX_COLORS } from './constants';

const animation = {
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)',
};

const borderWidths = [0, '1px'];

const breakpoints = ['640px', '1024px', '1500px'];

// @ts-expect-error see https://styled-system.com/responsive-styles#using-objects
breakpoints.sm = breakpoints[0];
// @ts-expect-error see https://styled-system.com/responsive-styles#using-objects
breakpoints.md = breakpoints[1];
// @ts-expect-error see https://styled-system.com/responsive-styles#using-objects
breakpoints.lg = breakpoints[2];

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
  small: '640px',
  medium: '1024px',
  large: '1500px',
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

const colors = toCssCustomProperties(
  primitives.colors.light,
  CSS_CUSTOM_PROPERTY_PREFIX_COLORS
);

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
  colors,
};

export default theme;
