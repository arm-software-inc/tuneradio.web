import styled from "styled-components";

export const CarouselStyle = styled.div`
	width: 100%;

	.items {
		display: grid;
		align-items: center;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
		min-height: 12.5rem;
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

	.index-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		gap: 0.5rem;

		button {
			cursor: pointer;
			width: 0.3rem;
			height: 0.3rem;
			border-radius: 50%;
			border: none;
			background: ${(props) => props.theme.colors.black};
		}

		.index-selected {
			width: 1rem;
			border-radius: 1rem;
		}
	}
`;
