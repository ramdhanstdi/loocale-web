import React, { useEffect, useState } from "react";
import Dots from "./Dots";
import Card from "./Card";

interface Props {
  children: React.ReactNode[];
  displayPerDot: number;
	className?: string
}
const Carousel: React.FC<Props> = (props) => {
  const [carouselStartIndex, setCarouselStartIndex] = useState(0);
	const [carouselEndIndex, setCarouselEndIndex] = useState(props.displayPerDot);

	const shownCarousel = props.children!.slice(carouselStartIndex, carouselEndIndex);

	const dotsAmount =
    React.Children.count(props.children) % props.displayPerDot === 0
      ? React.Children.count(props.children) / props.displayPerDot
      : React.Children.count(props.children) / props.displayPerDot + 1;
  const dotsArray = Array.from(Array(dotsAmount).keys());
	const handleClick = (index: number) => {
		setCarouselStartIndex(index * props.displayPerDot)
		setCarouselEndIndex((index+1) * props.displayPerDot)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (carouselStartIndex + props.displayPerDot <  React.Children.count(props.children)) {
				setCarouselStartIndex(carouselStartIndex+ props.displayPerDot)
			setCarouselEndIndex(carouselEndIndex + props.displayPerDot);
			} else {
				setCarouselStartIndex(0);
				setCarouselEndIndex(props.displayPerDot)
			}
			
		}, 5000)

		return () => {
			clearInterval(interval)
		}
	})
  return (
    <div className={`w-full flex flex-col items-center ${props.className}`}>
      {/* Carousel Items */}
      <div className="flex justify-between w-full mb-8">
				{shownCarousel}
			</div>
      {/* Carousel Dots */}
      <div className="flex gap-3 items-center">
        {dotsArray.map((number) => (
          <Dots key={number} active={Math.floor(carouselEndIndex / props.displayPerDot) - 1 === number} onClick={() => handleClick(number)}/>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
