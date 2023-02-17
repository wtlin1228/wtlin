import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import primitives from '@wtlin/primitives';
import {
  CSS_CUSTOM_PROPERTY_PREFIX_COLORS,
  COMMON,
  SystemCommonProps,
  TYPOGRAPHY,
  SystemTypographyProps,
} from './constants';
import { flatWithPath } from './utils/theme';
import { ComponentProps } from './utils/types';

const lightColors = flatWithPath(
  primitives.colors.light,
  CSS_CUSTOM_PROPERTY_PREFIX_COLORS
);

const darkColors = flatWithPath(
  primitives.colors.dark,
  CSS_CUSTOM_PROPERTY_PREFIX_COLORS
);

const GlobalStyle = css({
  html: {
    boxSizing: 'border-box',
    ...lightColors,
  },
  'html.wtlin-ui-light': lightColors,
  'html.wtlin-ui-dark': darkColors,
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  body: {
    margin: 0,
  },
});

const Base = styled.div<SystemCommonProps & SystemTypographyProps>(
  COMMON,
  TYPOGRAPHY
);

export type BaseStylesProps = ComponentProps<typeof Base>;

const BaseStyles = (props: BaseStylesProps) => {
  const { children, ...rest } = props;

  return (
    <Base {...rest}>
      <Global styles={GlobalStyle} />
      {children}
    </Base>
  );
};

export default BaseStyles;
