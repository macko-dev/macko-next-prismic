import styled from 'styled-components';
import theme from '../../styles/theme';

export type ButtonVariant = 'normal' | 'ghost' | string;

interface ButtonProps {
  backgroundColor?: string;
  backgroundHoverColor?: string;
  color?: string;
  width?: string;
  height?: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'lg';
}

export const StyledButton = styled.button<ButtonProps>`
  text-align: center;
  width: ${(props) => props.width || (props.size === 'sm' ? '96px' : '205px')};
  height: ${(props) => (props.height || props.size === 'sm' ? '32px' : '48px')};
  padding: ${(props) => (props.size === 'sm' ? '4px 8px' : '12px 32px')};
  border-radius: ${(props) => (props.size === 'sm' ? '5px' : '10px')};
  background-color: ${(props) =>
    props.variant === 'ghost'
      ? 'transparent'
      : props.backgroundColor || '#6473f5'};
  color: ${(props) => props.color || '#fff'};
  font-family: 'Raleway', sans-serif;
  font-weight: ${(props) => (props.size === 'sm' ? '500' : 'bold')};
  font-size: ${(props) => (props.size === 'sm' ? '14px' : '20px')};
  transition: background-color 200ms;

  ${(props) =>
    props.variant === 'ghost' &&
    `
    border: 1px solid ${props.backgroundColor || '#6473f5'};
  `}

  &:hover {
    background-color: ${(props) => props.backgroundHoverColor || '#8692ff'};

    ${(props) =>
      props.variant === 'ghost' &&
      `
    color: ${theme.color.white};
  `}
  }
`;
