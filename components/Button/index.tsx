import React from 'react';
import Link from 'next/link';

import { StyledButton } from './styles';

export type ButtonVariant = 'normal' | 'ghost' | string;

interface ButtonProps {
  link?: string;
  backgroundColor?: string;
  backgroundHoverColor?: string;
  color?: string;
  classNames?: string;
  width?: string;
  height?: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  link,
  backgroundColor,
  backgroundHoverColor,
  color,
  classNames,
  width,
  height,
  variant,
  size,
}) => {
  if (link) {
    return (
      <Link href="/">
        <StyledButton
          className={classNames}
          variant={variant}
          width={width}
          height={height}
          size={size}
          type="button"
          backgroundColor={backgroundColor}
          backgroundHoverColor={backgroundHoverColor}
          color={color}
        >
          {children}
        </StyledButton>
      </Link>
    );
  }
  return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;
