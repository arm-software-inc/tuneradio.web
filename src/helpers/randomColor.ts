import light from "../styles/themes/light";

export const randomColor = (): string => {
	const colors = Object.values(light.colors);
	const randomIndex = Math.floor(Math.random() * colors.length);
	return colors[randomIndex];
};
