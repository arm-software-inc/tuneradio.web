import styled from "styled-components";

export const SignUpStyle = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	height: 100vh;
	gap: 3rem;

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
