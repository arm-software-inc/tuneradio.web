import styled from 'styled-components'

export const PrimaryButton = styled.button`
	cursor: pointer;
	padding: 1rem 6rem;
	position: relative;

	color: ${props => props.theme.colors.white};
	background: ${props => props.theme.colors.purple};
	border: 2px solid ${props => props.theme.colors.black};
	border-radius: 1rem;

	&::after {
		content: '';
		z-index: -1;
		border: 2px solid ${props => props.theme.colors.black};
		border-radius: 15px;
		position: absolute;
		margin: 0 auto;
		bottom: -7px;
		left: 0;
		right: 0;
		width: 92%;
		height: 5px;
		background: ${props => props.theme.colors.yellow};
	}
`;
