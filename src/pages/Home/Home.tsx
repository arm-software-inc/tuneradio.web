import React, { useContext, useEffect, useState } from "react";
import { Station, getTrendingStations } from "../../services/station";
import Player from "../../components/Player/Player";
import { PlayerContext } from "../../contexts/PlayerContext";
import { HomeStyle } from "./style";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import { getAllTags, type Tag as TagType } from "../../services/tags";

function Home() {
	const [stations, setStations] = useState<Station[]>([]);

	const [tags, setTags] = useState<TagType[]>([]);

	const { setStation } = useContext(PlayerContext);

	useEffect(() => {
		getTrendingStations().then((res) => {
			// TODO: change this to the last played station
			setStation(res[0]);
			setStations(res);
		});
	}, [setStation]);

	useEffect(() => {
		getAllTags().then((res) => {
			setTags(res.slice(0, 6));
		})
	}, [setTags]);

	return (
		<HomeStyle>
			<section className="trending">
				<h2>Trending</h2>

				<Carousel numberTotalItems={stations.length}>
					{ stations.map((station) => (
						<React.Fragment key={station.stationUuid}>
							<Card station={station} setStation={setStation} />
							<p>{station.name}</p>
						</React.Fragment>
					)) }
				</Carousel>
			</section>

			<section>
				<h2>Find your genre</h2>

				<div className="tags">
					{ tags.map((tag) => (
						<Tag key={tag.id} name={tag.name} />
					)) }
				</div>
			</section>

			<Player />
		</HomeStyle>
	)
}

export default Home;
