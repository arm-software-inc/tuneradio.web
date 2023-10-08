import styled from "styled-components";

export const SignInStyle = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 100vh;
	gap: 3rem;

	.logo {
		width: 100%;
		text-align: center;
		position: relative;

		img {
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;

		gap: 2rem;

		input {
			display: block;
		}

		button {
			width: 100%;
		}
	}
`;
