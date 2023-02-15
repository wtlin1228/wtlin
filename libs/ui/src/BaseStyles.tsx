import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  COMMON,
  SystemCommonProps,
  TYPOGRAPHY,
  SystemTypographyProps,
} from './constants';
import { ComponentProps } from './utils/types';

const GlobalStyle = css({
  html: {
    boxSizing: 'border-box',
  },
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
