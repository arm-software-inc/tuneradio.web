import React, { useContext, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { PlayerStyle } from "./style";
import { PlayerState } from "./types";

function Player() {
	const { station } = useContext(PlayerContext);

	const audio = React.useRef<HTMLAudioElement>(null);

	const [playerState, setPlayerState] = useState<PlayerState>('paused');

	const toggleState = (): void => {
		if (!audio.current) return;

		if (audio.current.paused) audio.current.play();
		else audio.current.pause();

		setPlayerState(audio.current.paused ? 'paused' : 'playing');
	};

	return station ? (
		<PlayerStyle>
			<div className="logo">
				<img src={station.favicon} alt={`${station.name} logo`} />
			</div>

			<section>
				<h3>{station.name}</h3>
				<p>currently playing - Missão possível</p>
			</section>

			<button type="button">
				<img src="/icons/heart-filled.svg" alt="Heart icon for like button" />
			</button>

			<button type="button" onClick={toggleState}>
				{
					playerState === 'paused'
					? <img src="/icons/play.svg" alt="play button" />
					: <img src="/icons/pause.svg" alt="pause button" />
				}
			</button>

			<audio src={station.url} ref={audio}></audio>
		</PlayerStyle>
	)
	: null
}

export default Player;
