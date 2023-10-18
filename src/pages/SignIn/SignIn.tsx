import { SubmitHandler, useForm } from "react-hook-form";
import { SignInStyle } from "./style";
import { Login, signin } from "../../services/user";
import { setitem } from "../../helpers/localStorage";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import PasswordInput from "../../components/Input/PasswordInput/PasswordInput";
import Button from "../../components/Buttons/Button";
import { GoogleSvg } from "../../components/icons/google";
import { LogoSvg } from "../../components/icons/logo";


function SignIn() {
	const { register, handleSubmit, formState, setError } = useForm<Login>();

	const navigate = useNavigate();

	const submit: SubmitHandler<Login> = (user: Login) => {
		signin(user).then((res) => {
			// TODO: fix this double data
			const { data } = res;
			const { data: newData } = data;
			setitem('token', newData.token);
			navigate('/');
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
			<section className="logo">
				<LogoSvg />

				<div>
					<h1>radião</h1>
				</div>
			</section>

			<form onSubmit={handleSubmit(submit)}>
				<Input
					label="Email"
					formName="email"
					register={register}
					required="email cannot be empty"
					type="email"
					placeholder="example@mail.com"
				/>

				{ formState.errors?.email && <span>{formState.errors.email.message}</span> }

				<PasswordInput
					label="Password"
					formName="password"
					register={register}
					required="password cannot be empty"
					type="password"
					placeholder="your-password"
				/>

				{ formState.errors?.password && <span>{formState.errors.password.message}</span> }

				<label className="remember-me">
					<input type="checkbox" />
					Remember me
				</label>

				<Button type="submit">Sign In</Button>

				<Button type="button" color='white'>
					<p className='google-button'>
						<GoogleSvg />
						Sign In with Google
					</p>
				</Button>

				{/* <Button type="button" color="black">
					<p className='apple-button'>
						<AppleSvg />
						Sign In with Apple ID
					</p>
				</Button> */}
			</form>

			<footer className="helpful-links">
				<hr className="separator" />

				<Link to="/signup">Dont have an account? Sign up</Link>
				<Link to="/forgot-password">Forgot your password?</Link>
			</footer>
		</SignInStyle>
	)
}

export default SignIn;
