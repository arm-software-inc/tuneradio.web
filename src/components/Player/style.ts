import styled from "styled-components";

export const PlayerStyle = styled.div`
	position: sticky;
	left: 0;
	right: 0;
	bottom: 1rem;

	.container {
		position: relative;

		background: ${(props) => props.theme.colors.white};
		border: 2px solid ${(props) => props.theme.colors.black};
		border-radius: 1rem;

		margin: 0 auto;

		display: grid;
		align-items: center;
		grid-template-columns: 1fr 2fr 1fr;
		gap: 0.5rem;
	}

	.container::after {
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
		width: 93%;
		height: 5px;
		background: ${props => props.theme.colors.purple};
	}

	.logo {
		height: 100%;

		> img {
			width: 100%;
			height: 100%;

			outline: 2px solid ${(props) => props.theme.colors.black};
			border-radius: 1rem;
		}
	}

	.info {
		overflow: hidden;
		font-size: 0.75rem;

		span h3, p {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		span {
			display: flex;
			align-items: center;

			h3 {
				width: 75%;
				margin: 0 0.2rem 0.2rem 0;
			}
		}

		p {
			color: ${(props) => props.theme.colors.gray};
		}
	}

	.buttons {
		display: flex;
		align-items: center;
		justify-content: space-around;

		.like-button, .play-pause-button {
			display: flex;
			align-items: center;

			background: transparent;
			border: none;
		}

		.play-pause-button {
			margin-right: 0.5rem;
		}
	}
`;
