import styled from "styled-components";

export const InputStyle = styled.label`
	width: 100%;

	font-family: 'Inter', sans-serif;
	font-size: 0.875rem;
	font-weight: bold;

	position: relative;

	input {
		width: 100%;
		padding: 0.8rem;
		margin-top: 0.2rem;
		border-radius: 1rem;
		background: ${({ theme }) => theme.colors.white};
		border: 2px solid ${({ theme }) => theme.colors.black};
	}

	&::after {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 0;
		right: 0;
		z-index: -1;
		padding: 0.3rem 0.2rem;
		border: 2px solid ${props => props.theme.colors.black};
		border-radius: 1rem;
		margin: 0 auto;
		width: 90%;
		height: 5px;
		background: ${props => props.theme.colors.purple};
	}
`;
