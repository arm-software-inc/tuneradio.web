/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";
import { InputContainerStyle, InputGroupStyle } from "./style";
import { type ReactNode } from 'react';

export interface InputProps {
	label: string;
	formName: string;
	required?: string;
	type: 'email' | 'text' | 'password';
	placeholder: string;
	register: UseFormRegister<any>;
	children?: ReactNode | ReactNode[];
}

function Input({ label, formName, required, type, placeholder, register, children }: InputProps) {
	return (
		<InputContainerStyle>
			{label}
			<InputGroupStyle>
				<input { ...register(formName, { required }) } type={type} placeholder={placeholder} />
				{children}
			</InputGroupStyle>
		</InputContainerStyle>
	)
}

export default Input;
