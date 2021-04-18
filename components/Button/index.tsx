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
  type?: 'button' | 'submit' | 'reset';
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
  type,
}) => {
  if (link) {
    return (
      <Link href={link}>
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
  return (
    <StyledButton
      className={classNames}
      variant={variant}
      width={width}
      height={height}
      size={size}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      color={color}
      type={type || 'button'}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
