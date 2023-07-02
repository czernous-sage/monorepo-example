import { StyledButton } from './button.styles';
import { IButtonProps } from './button.types';

const Button = ({ text, onClick, ...props }: IButtonProps) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

export { Button };
