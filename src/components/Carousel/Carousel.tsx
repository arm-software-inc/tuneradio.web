import { useCallback, useEffect, useRef, useState } from "react";
import { CarouselStyle } from "./style";

function Carousel({ numberTotalItems, children }: { numberTotalItems: number, children: React.ReactNode[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [showItems, setShowItems] = useState(2);

	const ref = useRef<HTMLDivElement>(null);

	const handleResize = useCallback(() => {
		const cardWidth = 160; // px

		let numberItems = Math.floor(Math.round(ref.current!.offsetWidth / cardWidth));

		if (numberItems > 10) numberItems = 10;

		setShowItems(numberItems);
	}, [ref]);

	useEffect(() => {
		window.addEventListener("resize", handleResize)
	}, [handleResize]);

	return (
		<CarouselStyle ref={ref}>
			<div className="items">
				{children.slice(currentIndex * showItems, showItems * currentIndex + showItems).map((child, i) => (
					<div key={`item-${i}`} className="item">
						{child}
					</div>
				))}
			</div>

			<div className="index-buttons">
				{[...Array(Math.floor(Math.round(numberTotalItems / showItems))).keys()].map((index) => (
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
