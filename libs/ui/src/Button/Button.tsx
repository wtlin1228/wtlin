import * as React from 'react';
import styled from '@emotion/styled';

import sx, { SxProp } from '../sx';

/* eslint-disable-next-line */
export type ButtonProps = {} & SxProp;

const StyledButton = styled.button<SxProp>`
  ${sx}
`;

const ButtonComponent: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  sx = {},
  ...props
}) => {
  return <StyledButton sx={sx}>{props.children}</StyledButton>;
};

export { ButtonComponent };
