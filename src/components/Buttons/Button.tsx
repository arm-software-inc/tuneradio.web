import { ReactNode } from "react";
import { ButtonStyle } from "./style";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	color?: string;
}

function Button({ color = '', children, ...props }: Props) {
	return (
		<ButtonStyle { ...props } color={color}>
			{children}
		</ButtonStyle>
	)
}

export default Button;
