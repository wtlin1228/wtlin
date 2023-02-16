import * as React from 'react';
import styled from '@emotion/styled';

import sx, { SxProp } from '../sx';

export type ButtonProps = SxProp &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<SxProp>(sx);

const ButtonComponent: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  sx = {},
  ...props
}) => {
  return (
    <StyledButton sx={sx} {...props}>
      {props.children}
    </StyledButton>
  );
};

export { ButtonComponent };
