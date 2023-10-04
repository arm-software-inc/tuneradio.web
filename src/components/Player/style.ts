import styled from "styled-components";

export const PlayerStyle = styled.div`
	background: ${(props) => props.theme.colors.white};

	position: fixed;
	margin: 0 auto;
	bottom: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	.logo img {
		width: 100%;
		height: 100%;
	}
`;
