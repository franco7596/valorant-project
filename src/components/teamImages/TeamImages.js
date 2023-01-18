import React, { useState } from "react";
import "./teamImages.css";
export default function TeamImages({ agents }) {
	const [moving, setMoving] = useState(false);
	const [mouseLastPosition, setMouseLastPosition] = useState(0);
	const [transform, setTransform] = useState(0);
	const [position, setPosition] = useState(0);
	const [imagesProperties, setImagesProperties] = useState([
		{
			order: 1,
			scale: 1,
		},
		{
			order: 2,
			scale: 1.5,
		},
		{
			order: 3,
			scale: 2,
		},
		{
			order: 4,
			scale: 1.5,
		},
		{
			order: 5,
			scale: 1,
		},
	]);

	const handleMouseDown = (e) => {
		setMoving(true);
		setMouseLastPosition(e.pageX);
		const transformResult =
			window
				.getComputedStyle(document.querySelector("#imageAgent1"))
				.getPropertyValue("transform") === "none"
				? 0
				: window
						.getComputedStyle(document.querySelector("#imageAgent1"))
						.getPropertyValue("transform")
						.split(",")[4]
						.trim();
		setTransform(parseInt(transformResult));
	};
	const handleMouseMove = (e) => {
		const widthImage =
			document.querySelector("#imageAgent1").clientWidth -
			document.querySelector("#imageAgent1").clientWidth * 0.5;
		if (moving) {
			const difX = e.pageX - mouseLastPosition + transform;
			if (difX >= widthImage) {
				setMouseLastPosition(e.pageX);
				setPosition(0);
				handleChange();
				return;
			}
			if (difX <= -widthImage) {
				setMouseLastPosition(e.pageX);
				setPosition(0);
				handleChange(false);
				return;
			}
			setPosition(difX);
		}
	};

	const handleMouseUp = () => {
		setMoving(false);
		setPosition(0);
		if (position >= 200) {
			handleChange();
		}
		if (position < -200) {
			handleChange(false);
		}
	};
	const handleChange = (rigth = true) => {
		const lastValue = imagesProperties.slice(-1);
		const firstValue = imagesProperties.slice(0, 1);
		const midleValue = imagesProperties.slice(1, imagesProperties.length - 1);
		if (rigth) {
			setImagesProperties([...midleValue, ...lastValue, ...firstValue]);
		} else {
			setImagesProperties([...lastValue, ...firstValue, ...midleValue]);
		}
	};
	return (
		<div
			className="team_Images-container"
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp}
			onMouseMove={handleMouseMove}
		>
			<div
				id="imageAgent1"
				style={{
					backgroundImage: `url(${agents[0].bustPortrait})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
					position: "relative",
					transform: `translateX(${position}px) scale(${imagesProperties[0].scale})`,
					order: imagesProperties[0].order,
				}}
				className="team_Images-img"
				onMouseDown={handleMouseDown}
			/>
			<div
				style={{
					backgroundImage: `url(${agents[1].bustPortrait})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
					position: "relative",
					transform: `translateX(${position}px) scale(${imagesProperties[1].scale})`,
					order: imagesProperties[1].order,
				}}
				onMouseDown={handleMouseDown}
				className="team_Images-img"
			/>
			<div
				style={{
					backgroundImage: `url(${agents[2].bustPortrait})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
					position: "relative",
					transform: `translateX(${position}px) scale(${imagesProperties[2].scale})`,
					order: imagesProperties[2].order,
				}}
				onMouseDown={handleMouseDown}
				className="team_Images-img"
			/>
			<div
				style={{
					backgroundImage: `url(${agents[3].bustPortrait})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
					position: "relative",
					transform: `translateX(${position}px) scale(${imagesProperties[3].scale})`,
					order: imagesProperties[3].order,
				}}
				onMouseDown={handleMouseDown}
				className="team_Images-img"
			/>
			<div
				style={{
					backgroundImage: `url(${agents[4].bustPortrait})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPosition: "center",
					position: "relative",
					transform: `translateX(${position}px) scale(${imagesProperties[4].scale})`,
					order: imagesProperties[4].order,
				}}
				className="team_Images-img"
				onMouseDown={handleMouseDown}
			/>
		</div>
	);
}
