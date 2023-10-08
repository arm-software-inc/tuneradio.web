/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseFormRegister } from "react-hook-form";
import { PasswordInputStyle } from "./style";

interface Props {
	label: string;
	formName: string;
	required?: string;
	type: 'email' | 'text' | 'password';
	placeholder: string;
	register: UseFormRegister<any>;
}

function PasswordInput({ label, formName, required, type, placeholder, register }: Props) {
	return (
		<PasswordInputStyle>
			{label}
			<input { ...register(formName, { required }) } type={type} placeholder={placeholder} />
		</PasswordInputStyle>
	)
}

export default PasswordInput;
