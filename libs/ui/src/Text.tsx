import styled from '@emotion/styled';
import {
  COMMON,
  SystemCommonProps,
  TYPOGRAPHY,
  SystemTypographyProps,
} from './constants';
import sx, { SxProp } from './sx';
import { ComponentProps } from './utils/types';

const Text = styled.span<SystemCommonProps & SystemTypographyProps & SxProp>(
  COMMON,
  TYPOGRAPHY,
  sx
);

export type TextProps = ComponentProps<typeof Text>;
export default Text;
