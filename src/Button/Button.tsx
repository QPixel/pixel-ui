import React from 'react';
import tw, { styled } from "twin.macro";

const ButtonStyled = styled.button`
`

interface ButtonProps {
	primary: boolean;
	backgroundColor?: string;
	children?: string | React.ReactElement
	onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ primary, backgroundColor = "#000000", children, onClick }) => {
	return (
		<ButtonStyled onClick={onClick}>
			{children}
		</ButtonStyled>
	);
}

export default Button;