import { ReactSVG } from "react-svg";
import Input, { InputProps } from "../Input";
import { useState } from "react";

interface Props extends InputProps {}

function PasswordInput({ ...props }: Props) {
	const [seePassword, setSeePassword] = useState(false);

	return (
		<Input {...props} type={seePassword ? 'text' : 'password'}>
			<button type="button" onClick={() => setSeePassword(!seePassword)}>
				{ seePassword ?  <ReactSVG src="/eye-closed.svg"  /> : <ReactSVG src="/eye.svg"  /> }
			</button>
		</Input>
	)
}

export default PasswordInput;
