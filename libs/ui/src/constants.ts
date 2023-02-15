import * as styledSystem from 'styled-system';

const { compose, system } = styledSystem;

// Common props

export const COMMON = compose(
  styledSystem.space,
  styledSystem.color,
  styledSystem.display
);

export interface SystemCommonProps
  extends styledSystem.ColorProps,
    styledSystem.SpaceProps,
    styledSystem.DisplayProps {}

// Typography props

const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
  },
});

export const TYPOGRAPHY = compose(styledSystem.typography, whiteSpace);

export interface SystemTypographyProps extends styledSystem.TypographyProps {
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
}

// Border props

export const BORDER = compose(styledSystem.border, styledSystem.shadow);

export interface SystemBorderProps
  extends styledSystem.BorderProps,
    styledSystem.ShadowProps {}

// Layout props

export const LAYOUT = styledSystem.layout;

export type SystemLayoutProps = styledSystem.LayoutProps;
