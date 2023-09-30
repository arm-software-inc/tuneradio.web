import { SubmitHandler, useForm } from "react-hook-form";
import { SignInStyle } from "./style";
import { Login, signin } from "../../services/user";

function SignIn() {
	const { register, handleSubmit } = useForm<Login>();

	const submit: SubmitHandler<Login> = (user: Login) => {
		signin(user).then((res) => {
			console.log({res})
		});
	};

	return (
		<SignInStyle>
			<h1>Welcome back to Radião</h1>

			<form onSubmit={handleSubmit(submit)}>
				<label>
					Email
					<input {...register('email')} type="email" placeholder="email" />
				</label>

				<label>
					Password
					<input {...register('password')} type="password" placeholder="your-password-here" />
				</label>

				<button type="submit"> signin </button>
			</form>
		</SignInStyle>
	)
}

export default SignIn;
