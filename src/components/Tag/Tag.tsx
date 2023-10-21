import { useNavigate } from "react-router-dom";
import { TagStyle } from "./style";

function Tag({ name, color } : { name: string, color: string }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/tag/${name}`);
	};

	return (
		<TagStyle color={color} onClick={handleClick}>
			<strong>{name}</strong>
		</TagStyle>
	);
}

export default Tag;
