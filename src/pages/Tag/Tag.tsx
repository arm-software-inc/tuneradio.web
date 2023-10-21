import { useLoaderData } from "react-router-dom";
import { TagStyle } from "./style";
import { useEffect, useState } from "react";
import { Station } from "../../services/station";
import Card from "../../components/Card/Card";
import Player from "../../components/Player/Player";
import { capitalize } from "../../helpers/capitalize";

function Tag() {
	const data = useLoaderData() as { name: string, stations: Station[] };

	const [stations, setStations] = useState<Station[]>([]);

	useEffect(() => {
		setStations(data.stations);
	}, [data]);

	return (
		<TagStyle>
			<h2> {capitalize(data.name)} Stations</h2>

			<div className="content">
				<section className="stations">
					{ stations.map((station) => (
						<div key={station.stationUuid} className="item">
							<Card station={station} />
							<p>{station.name}</p>
						</div>
					)) }
				</section>
			</div>

			<Player />
		</TagStyle>
	)
}

export default Tag;
