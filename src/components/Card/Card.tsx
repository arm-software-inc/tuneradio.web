import { Station } from "../../services/station";
import { CardStyle } from "./style";

interface Props {
	station: Station;
	setStation: (station: Station) => void;
}

function Card({ station, setStation }: Props) {
	return (
		<CardStyle onClick={() => {setStation(station)}}>
			<img src={station.favicon || '/missing-radio.jpeg'} alt={`${station.name} logo`} />
		</CardStyle>
	)
}

export default Card;
