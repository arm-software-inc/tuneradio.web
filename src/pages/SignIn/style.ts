import styled from "styled-components";

export const SignInStyle = styled.main`
	font-family: 'Inter', sans-serif;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 100vh;
	gap: 2rem;

	.logo {
		width: 100%;
		text-align: center;
		position: relative;

		svg {
			position: absolute;
			bottom: 4rem;
			left: 6rem;
		}

		> div {
			width: 100%;
			background: ${({ theme }) => theme.colors.yellow};

			padding: 3rem 0 0 0;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&::after {
				content: '';
				width: 90%;
				height: 4px;
				display: block;
				background: ${({ theme }) => theme.colors.black};
			}

			h1 {
				font-family: 'Kodchasan', sans-serif;
				font-size: 3rem;
			}
		}
	}

	form {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-around;

		gap: 2rem;
		padding: 0 2rem;

		input {
			display: block;
		}

		.remember-me {
			display: flex;
			align-items: center;

			font-size: 0.875rem;
			font-weight: bold;

			input {
				width: 1rem;
				height: 1rem;
				accent-color: ${({theme}) => theme.colors.yellow};
				margin-right: 0.5rem;
			}
		}

		button {
			width: 100%;
		}
	}

	.google-button, .apple-button {
		display: flex;
		align-items: center;

		svg {
			margin: 0 1rem;
		}
	}

	.helpful-links {
		.separator {
			background: ${({theme}) => theme.colors.black};
			width: 100%;
			height: 3px;
			border: none;
			border-radius: 1rem;
			margin-bottom: 1rem;
		}

		width: 100%;
		padding: 0 2rem;

		a {
			display: block;
			font-size: 0.875rem;
			font-weight: 600;
			color: ${({theme}) => theme.colors.black};
			line-height: 1.5;
		}
	}
`;
