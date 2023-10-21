import { randomColor } from "../../helpers/randomColor";
import { TagStyle } from "./style";

function Tag({ name } : { name: string}) {
	const color = randomColor();

	return (
		<TagStyle color={color}>
			<strong>{name}</strong>
		</TagStyle>
	);
}

export default Tag;
