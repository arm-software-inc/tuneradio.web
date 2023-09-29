import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { SignInStyle } from "./style";

function SignIn() {
	return (
		<SignInStyle>
			<h1>Welcome back to Radião</h1>

			<form>
				<label>
					Email
					<input type="email" placeholder="email" />
				</label>

				<label>
					Password
					<input type="password" placeholder="your-password-here" />
				</label>

				<PrimaryButton> aisuydgausydg </PrimaryButton>
			</form>
		</SignInStyle>
	)
}

export default SignIn;
