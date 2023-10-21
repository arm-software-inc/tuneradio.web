import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContext";
import { Station } from "../../services/station";
import { CardStyle } from "./style";

interface Props {
	station: Station;
}

function Card({ station }: Props) {
	const { setStation } = useContext(PlayerContext);

	return (
		<CardStyle onClick={() => {setStation(station)}}>
			<img src={station.favicon || '/missing-radio.jpeg'} alt={`${station.name} logo`} />
		</CardStyle>
	)
}

export default Card;
