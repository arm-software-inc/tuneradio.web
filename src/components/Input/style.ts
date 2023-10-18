import styled from "styled-components";

export const InputGroupStyle = styled.div`
	position: relative;

	display: grid;
	grid-template-columns: 1fr 0.2fr;

	width: 100%;
	margin-top: 0.2rem;
	border-radius: 1rem;
	background: ${({ theme }) => theme.colors.white};
	border: 2px solid ${({ theme }) => theme.colors.black};

	input {
		padding: 0.8rem;
		font-size: 0.875rem;
		width: 100%;
		border: none;
		outline: none;
		background: transparent;
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

	> button {
		border-radius: 1rem;
		border: none;
		outline: 2px solid ${({ theme }) => theme.colors.black};
		background: ${({ theme }) => theme.colors.yellow};
	}
`;

export const InputContainerStyle = styled.label`
	width: 100%;

	font-family: 'Inter', sans-serif;
	font-size: 0.875rem;
	font-weight: bold;
`;
