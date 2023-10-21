import styled from "styled-components";

export const HomeStyle = styled.main`
	height: 100vh;
	padding: 1rem;

	h2 {
		font-weight: 500;
		padding: 0.8rem 0;
	}

	.tags {
		display: grid;
		gap: 1rem
		;
		grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));

	}
`;
