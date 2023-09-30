import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpStyle } from "./style";
import { User, createUser } from "../../services/user";

function SignUp() {
	const { register, handleSubmit } = useForm<User>();

	const submit: SubmitHandler<User> = (user: User) => {
		createUser(user).then((res) => {
			console.log({res})
		});
	};

	return (
		<SignUpStyle>
			<h1>SignUp</h1>
			<form onSubmit={handleSubmit(submit)}>
				<label>
					Name
					<input {...register('name')} type="text" placeholder="what's your name?" />
				</label>
				<label>
					Email
					<input {...register('email')} type="email" placeholder="your-email@mail.com" />
				</label>
				<label>
					Password
					<input {...register('password')} type="password" placeholder="your-password" />
				</label>

				<button type="submit">
					Sign Up
				</button>
			</form>
		</SignUpStyle>
	)
}

export default SignUp;
