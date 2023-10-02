import { SubmitHandler, useForm } from "react-hook-form";
import { SignInStyle } from "./style";
import { Login, signin } from "../../services/user";

function SignIn() {
	const { register, handleSubmit, formState, setError } = useForm<Login>();

	const submit: SubmitHandler<Login> = (user: Login) => {
		signin(user).then((res) => {
			console.log({res})
		})
		.catch((err) => {
			const { response } = err;
			const { data }: { data: { success: boolean, errors: string[] } } = response;

			data.errors.forEach((error) => {
				setError('email', { message: error });
			});
		})
	};

	return (
		<SignInStyle>
			<h1>Welcome back to Radião</h1>

			<form onSubmit={handleSubmit(submit)}>
				<label>
					Email
					<input {...register('email', { required: 'email cannot be empty' })} type="email" placeholder="email" />
					{ formState.errors?.email && <span>{formState.errors.email.message}</span> }
				</label>

				<label>
					Password
					<input {...register('password', { required: 'password cannot be empty' })} type="password" placeholder="your-password-here" />
					{ formState.errors?.password && <span>{formState.errors.password.message}</span> }
				</label>

				<button type="submit"> signin </button>
			</form>
		</SignInStyle>
	)
}

export default SignIn;
