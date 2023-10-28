import styled from "styled-components";

export const NewPlayerStyle = styled.div`
	background: white;

	position: sticky;
	bottom: 1rem;
	align-self: flex-start;

	width: 50%;

	.controls {
		/* max-height: 10rem; */
		padding: 1rem;
		display: grid;
		align-items: center;
		grid-template-columns: repeat(3, 1fr);

		.logo {
			width: 100%;
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
	}

	.more-buttons {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
`;
