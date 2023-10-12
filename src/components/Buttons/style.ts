import styled from 'styled-components'

interface ButtonProps {
	color: string;
}

export const ButtonStyle = styled.button<ButtonProps>`
	font-family: 'Inter', sans-serif;
	font-weight: bold;
	font-size: 1rem;

	cursor: pointer;
	padding: 0.8rem 0;

	border-radius: 1rem;
	color: ${props => props.theme.colors.black};
	border: 2px solid ${props => props.theme.colors.black};

	background: ${(props) => props.color || props.theme.colors.yellow};
`;
