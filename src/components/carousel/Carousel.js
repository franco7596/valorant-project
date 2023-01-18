import React, { useState } from "react";
import "./carousel.css";

export default function Carousel({
	elements,
	handleInformation,
	image,
	showNavBar = true,
	showArrows = false,
	colorArrows = "var(--red-color)",
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
		if (position >= elements.length) {
			result = 0;
		}
		if (position === -1) {
			result = elements.length - 1;
		}
		if (position === -2) {
			result = selectedImage + 1 >= elements.length ? 0 : selectedImage + 1;
		}
		setSelectedImage(result);
		handleInformation(elements[result]);
	};

	return (
		<div className={showArrows ? "carousel flex-row" : "carousel flex-colum "}>
			{showArrows && (
				<div
					className="left_arrow"
					style={{ borderColor: colorArrows }}
					type="button"
					onClick={() => handleSelectImage(selectedImage - 1)}
				/>
			)}
			<div className="carousel-container">
				<div
					style={containerImages}
					className="carousel-container-sub_container"
					onClick={() => !showArrows && handleSelectImage(-2)}
					type={!showArrows ? "button" : ""}
				>
					{elements.map((element) => (
						<div className="carousel-card" key={element.uuid}>
							<img src={element[image]} className="carousel-img" />
						</div>
					))}
				</div>
			</div>
			{showArrows && (
				<div
					className="right_arrow"
					style={{ borderColor: colorArrows }}
					type="button"
					onClick={() => handleSelectImage(selectedImage + 1)}
				/>
			)}
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
