import styled from "styled-components";

export const CardStyle = styled.div`
	width: clamp(5rem, 10rem, 12rem);
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -3px;
		left: 0;
		right: 0;
		z-index: -1;
		padding: 0.3rem 0.2rem;
		border: 2px solid ${props => props.theme.colors.black};
		border-radius: 1rem;
		margin: 0 auto;
		width: 85%;
		height: 5px;
		background: ${props => props.theme.colors.white};
	}

	img {
		width: 100%;
		height: 100%;
		border: 2px solid ${(props) => props.theme.colors.black};
		border-radius: 1rem;

		/* for those images that does not have a background */
		background: ${(props) => props.theme.colors.white};
	}
`;
