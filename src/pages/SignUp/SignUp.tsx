import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpStyle } from "./style";
import { User, createUser } from "../../services/user";
import { useNavigate } from "react-router-dom";

function SignUp() {
	const { register, handleSubmit, setError, formState } = useForm<User>();

	const navigate = useNavigate();

	const submit: SubmitHandler<User> = (user: User) => {
		createUser(user).then(() => {
			navigate('/');
		})
		.catch((err) => {
			const { response } = err;
			const { data }: { data: { success: boolean, errors: string[] } } = response;

			data.errors.forEach((error) => {
				setError('email', { message: error });
			});
		});
	};

	return (
		<SignUpStyle>
			<h1>SignUp</h1>
			<form onSubmit={handleSubmit(submit)}>
				<label>
					Name
					<input {...register('name', { required: 'name is required' } )} type="text" placeholder="what's your name?" />
				</label>
				<label>
					Email
					<input {...register('email', { required: 'email is required' })} type="email" placeholder="your-email@mail.com" />
					{ formState.errors.email && <span>{formState.errors.email.message}</span> }
				</label>
				<label>
					Password
					<input {...register('password', { required: 'password is required' })} type="password" placeholder="your-password" />
				</label>

				<button type="submit">
					Sign Up
				</button>
			</form>
		</SignUpStyle>
	)
}

export default SignUp;
