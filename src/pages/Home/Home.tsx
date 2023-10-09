import { useContext, useEffect, useState } from "react";
import { Station, getTrendingStations } from "../../services/station";
// import StationCard from "../../components/StationCard";
import Player from "../../components/Player/Player";
import { PlayerContext } from "../../contexts/PlayerContext";
import { HomeStyle } from "./style";

function Home() {
	const [stations, setStations] = useState<Station[]>([]);

	const { setStation } = useContext(PlayerContext);

	useEffect(() => {
		getTrendingStations().then((res) => {
			setStation(res[0]);
			// console.log(res)
			setStations(res);
		});
	}, [setStation]);

	return (
		<HomeStyle>
			<h1>Welcome to Radião</h1>

			<section>
				<h2>Trending stations</h2>

				{/* { stations.map((station) => (
					<StationCard key={station.stationUuid} station={station} />
				)) } */}
			</section>

			<Player />
		</HomeStyle>
	)
}

export default Home;
