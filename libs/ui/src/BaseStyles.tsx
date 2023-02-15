import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  display,
  DisplayProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { ComponentProps } from './utils/types';

const GlobalStyle = css({
  html: {
    boxSizing: 'border-box',
  },
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  body: {
    margin: 0, // Remove the margin in all browsers.
  },
});

const Base = styled.div<
  SpaceProps & ColorProps & DisplayProps & TypographyProps
>(space, color, display, typography);

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
