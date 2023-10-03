import styled from "styled-components";

export const PlayerStyle = styled.div`
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

	.play-button {
		width: 20px;
		height: 20px;
		background: black;
		clip-path: polygon(0% 0%, 0% 100%, 100% 50%);
	}
`;
