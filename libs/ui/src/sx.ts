import { ALL, AllProps } from './constants';

export interface SxProp {
  sx?: AllProps;
}

const sx = (props: SxProp & { theme: any }) =>
  ALL({ ...props.sx, theme: props.theme });

export default sx;
