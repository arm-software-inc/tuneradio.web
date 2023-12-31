import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { PlayerStyle } from "./style";
import { PlayerState } from "./types";
import ReactCountryFlag from "react-country-flag";
import { getItem } from "../../helpers/localStorage";
import { getTrendingStations } from "../../services/station";

function Player() {
	const { station, setStation } = useContext(PlayerContext);

	const audio = React.useRef<HTMLAudioElement>(null);

	const [playerState, setPlayerState] = useState<PlayerState>('paused');

	useEffect(() => {
		const lastStation = getItem('lastStation');

		console.log(lastStation)

		if (!lastStation) return;
		// TODO: temporary
		// should have a method `getStationById`
		getTrendingStations().then((res) => {
			const station = res.filter(station => station.stationUuid === lastStation)[0];
			if (station) setStation(station);
		});
	}, [setStation]);

	const toggleState = (): void => {
		if (!audio.current) return;

		if (audio.current.paused) audio.current.play();
		else audio.current.pause();

		setPlayerState(audio.current.paused ? 'paused' : 'playing');
	};

	useEffect(() => {
		if (audio.current) {
			toggleState();
			audio.current.play();
		}
	}, [station]);

	return station ? (
		<PlayerStyle>
			<div className="container">
				<div className="logo">
					<img src={station.favicon === '' ? '/missing-radio.jpeg' : station.favicon} alt={`${station.name} logo`} />
				</div>

				<section className="info">
					<span>
						<h3>{station.name}</h3>
						<ReactCountryFlag countryCode={station.countryCode} style={{ fontSize: '1rem' }} />
					</span>

					{/* TODO: change to show the current show */}
					{/* <p>currently playing - Missão possível</p> */}
				</section>

				<div className="buttons">
					<button type="button" className="like-button">
						<img src="/icons/heart-filled.svg" alt="Heart icon for like button" />
					</button>

					<button className="play-pause-button" type="button" onClick={toggleState}>
						{
							playerState === 'paused'
							? <img src="/icons/play.svg" alt="play button" />
							: <img src="/icons/pause.svg" alt="pause button" />
						}
					</button>
				</div>
				<audio src={station.url} ref={audio}></audio>
			</div>
		</PlayerStyle>
	)
	: null
}

export default Player;
