import { useState } from "react";
import { CarouselStyle } from "./style";

function Carousel({ showItems = 2, children	}: { showItems?: number, children: React.ReactNode[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<CarouselStyle>
			<div className="items">
				{children.slice(currentIndex * showItems, showItems * currentIndex + 2).map((child, i) => (
					<div key={`item-${i}`} className="item">
						{child}
					</div>
				))}
			</div>

			<div className="index-buttons">
				{[...Array(children.length / showItems).keys()].map((index) => (
					<button
						key={index}
						type="button"
						onClick={() => setCurrentIndex(index)}
						className={`${index === currentIndex && 'index-selected'}`}
					></button>
				))}
			</div>
		</CarouselStyle>
	)
}

export default Carousel;
