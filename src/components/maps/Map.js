import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetMap } from "../../redux/actions/mapsAction";
import Loading from "../loading/Loading";
import "./map.css";

export default function Map() {
	const params = useParams();
	const dispach = useDispatch();
	const mapSelected = useSelector((state) => state.maps.mapSelected);
	useEffect(() => {
		dispach(startGetMap(params.idMap));
	}, []);

	return (
		<div className="map-container">
			{mapSelected && mapSelected.uuid === params.idMap ? (
				<div
					className="map-image"
					style={{
						backgroundImage: `url(${mapSelected.displayIcon})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						backgroundPosition: "center",
					}}
				>
					<h4 className="map-image-h4">
						Coordinates: {mapSelected.coordinates}
					</h4>
					<h5 className="map-image-h5">Name: {mapSelected.displayName}</h5>
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
}
