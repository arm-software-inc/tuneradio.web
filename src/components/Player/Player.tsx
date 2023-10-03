import React, { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { PlayerStyle } from "./style";

function Player() {
	const { station } = useContext(PlayerContext);

	const audio = React.useRef<HTMLAudioElement>(null);

	const toggleState = (): void => {
		if (!audio.current) return;

		if (audio.current.paused) audio.current.play();
		else audio.current.pause();
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
				<div className="play-button"></div>
			</button>

			<audio src={station.url} ref={audio}></audio>
		</PlayerStyle>
	)
	: null
}

export default Player;
