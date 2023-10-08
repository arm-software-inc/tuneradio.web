import { useContext, useEffect, useState } from "react";
import { Station, getTrendingStations } from "../../services/station";
import Player from "../../components/Player/Player";
import { PlayerContext } from "../../contexts/PlayerContext";
import { HomeStyle } from "./style";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import React from "react";

function Home() {
	const [stations, setStations] = useState<Station[]>([]);

	const { setStation } = useContext(PlayerContext);

	useEffect(() => {
		getTrendingStations().then((res) => {
			// console.log(res)

			// TODO: change this to the last played station
			setStation(res[0]);
			setStations(res);
		});
	}, [setStation]);

	return (
		<HomeStyle>
			<section className="trending">
				<h2>Trending</h2>

				<Carousel>
					{ stations.map((station) => (
						<React.Fragment key={station.stationUuid}>
							<Card station={station} />
							<p>{station.name}</p>
						</React.Fragment>
					)) }
				</Carousel>
			</section>

			<Player />
		</HomeStyle>
	)
}

export default Home;
