import { EyeSvg } from "../../icons/eye";
import { EyeClosedSvg } from "../../icons/eyeClosed";
import Input, { InputProps } from "../Input";
import { useState } from "react";

interface Props extends InputProps {}

function PasswordInput({ ...props }: Props) {
	const [seePassword, setSeePassword] = useState(false);

	return (
		<Input {...props} type={seePassword ? 'text' : 'password'}>
			<button type="button" onClick={() => setSeePassword(!seePassword)}>
				{ seePassword ?  <EyeClosedSvg /> : <EyeSvg /> }
			</button>
		</Input>
	)
}

export default PasswordInput;
