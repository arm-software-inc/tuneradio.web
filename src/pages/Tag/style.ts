import styled from "styled-components";

export const TagStyle = styled.main`
	height: 100vh;
	padding: 1rem;

	display: flex;
	flex-direction: column;

	.content {
		flex: 1;
	}

	h2 {
		font-weight: 500;
		padding: 0.8rem 0;
	}

	.stations {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
		padding-bottom: 2rem;
	}

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;

		p {
			width: 10rem;
			margin-top: 0.6rem;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
`;
