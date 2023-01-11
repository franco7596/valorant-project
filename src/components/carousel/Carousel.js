import React, { useState } from "react";
import "./carousel.css";

export default function Carousel({
	elements,
	handleInformation,
	image,
	showNavBar = true,
}) {
	const [selectedImage, setSelectedImage] = useState(0);
	const containerImages = {
		width: `${100 * elements.length}%`,
		height: "80%",
		display: "grid",
		gridTemplateColumns: `repeat(${elements.length}, 100%)`,
		transitionDuration: "1.5s",
		transform: `translate(${selectedImage * -100}%)`,
	};
	const handleSelectImage = (position) => {
		let result = position;
		if (position === -1) {
			result = selectedImage + 1 >= elements.length ? 0 : selectedImage + 1;
		}
		setSelectedImage(result);
		handleInformation(elements[result]);
	};

	return (
		<div className="carousel">
			<div className="carousel-container">
				<div
					style={containerImages}
					className="carousel-container-sub_container"
					onClick={() => handleSelectImage(-1)}
					type="button"
				>
					{elements.map((element) => (
						<div className="carousel-card" key={element.uuid}>
							<img src={element[image]} className="carousel-img" />
						</div>
					))}
				</div>
			</div>
			{showNavBar && (
				<div className="carousel-container-points">
					{elements.map((element, i) => (
						<div
							className={
								selectedImage === i
									? "carousel-points carousel-points-activate"
									: "carousel-points"
							}
							type="button"
							key={i}
							onClick={() => handleSelectImage(i)}
						/>
					))}
				</div>
			)}
		</div>
	);
}
