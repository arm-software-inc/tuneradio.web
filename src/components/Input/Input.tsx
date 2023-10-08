/* eslint-disable @typescript-eslint/no-explicit-any */

import { UseFormRegister } from "react-hook-form";
import { InputStyle } from "./style";
import PasswordInput from "./PasswordInput/PasswordInput";

interface Props {
	label: string;
	formName: string;
	required?: string;
	type: 'email' | 'text' | 'password';
	placeholder: string;
	register: UseFormRegister<any>;
}

// TODO: improve this component
function Input({ label, formName, required, type, placeholder, register }: Props) {
	return type !== 'password' ? (
		<InputStyle>
			{label}
			<input { ...register(formName, { required }) } type={type} placeholder={placeholder} />
		</InputStyle>
	)	: (
		<PasswordInput
			label={label}
			formName={formName}
			required={required}
			type={type}
			placeholder={placeholder}
			register={register}
		/>
	);
}

export default Input;
