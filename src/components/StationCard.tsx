import { Station } from "../services/station";

function StationCard({ station }: { station: Station }) {
	return (
		<div>
			<img src={station.favicon} alt={`logo for ${station.name}`} />
		</div>
	)
}

export default StationCard;
