import styled from "styled-components";

export const TagStyle = styled.div<{ color: string }>`
	position: relative;

	background: ${(props) => props.theme.colors.white};
	border: 2px solid ${(props) => props.theme.colors.black};
	border-radius: 0.8rem;
	padding: 0.5rem;

	text-align: center;


	font-family: 'Inter', sans-serif;
	font-size: 1.125rem;

	&::after {
		content: '';
		position: absolute;
		bottom: -7px;
		left: 0;
		right: 0;
		z-index: -1;
		padding: 0.3rem 0.2rem;
		border: 2px solid ${props => props.theme.colors.black};
		border-radius: 1rem;
		margin: 0 auto;
		width: 90%;
		height: 5px;
		background: ${props => props.color};
	}
`;
