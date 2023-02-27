import styled from '@emotion/styled';
import { ALL, AllProps } from './constants';
import sx, { SxProp } from './sx';
import { ComponentProps } from './utils/types';

type StyledBoxProps = AllProps & SxProp;

const Box = styled.div<StyledBoxProps>(ALL, sx);

export type BoxProps = ComponentProps<typeof Box>;
export default Box;
