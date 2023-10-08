import { Station } from "../../services/station";
import { CardStyle } from "./style";

function Card({ station }: { station: Station }) {
	return (
		<CardStyle>
			<img src={station.favicon} alt={`${station.name} logo`} />
		</CardStyle>
	)
}

export default Card;
