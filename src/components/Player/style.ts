import styled from "styled-components";

export const PlayerStyle = styled.div`
	background: ${(props) => props.theme.colors.white};

	position: fixed;
	bottom: 0;

	margin: 0 auto;

	display: grid;
	align-items: center;
	grid-template-columns: 1fr 2fr 1fr;
	gap: 0.2rem;

	.logo {
		> img {
			width: 100%;
			height: 100%;

			border: 2px solid ${(props) => props.theme.colors.black};
			border-radius: 1rem;
		}
	}

	.info {
		overflow: hidden;

		> span h3, > p {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		> span {
			display: flex;
			align-items: center;

			h3 {
				width: 75%;
			}
		}
	}
`;
