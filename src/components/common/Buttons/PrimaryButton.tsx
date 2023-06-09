import styled from '@emotion/styled';
import { FC, ButtonHTMLAttributes } from "react";

const StyledButton = styled.button<PrimaryButtonProps>`
  padding: 15px 50px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 0.2em solid white;
  color: white;
  font-size: 1em;
  font-weight: normal;
  margin-top: ${(props) => props.padding}em;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

type PrimaryButtonProps = {
  children: string;
  padding?: number;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton: FC<PrimaryButtonProps> = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;