import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetMap } from "../../redux/actions/mapsAction";
import "./map.css";

export default function Map() {
	const params = useParams();
	const dispach = useDispatch();
	const mapSelected = useSelector((state) => state.maps.mapSelected);
	useEffect(() => {
		dispach(startGetMap(params.idMap));
	}, []);

	return (
		<div>
			{mapSelected && (
				<div
					className="map-image"
					style={{
						backgroundImage: `url(${mapSelected.displayIcon})`,
						backgroundRepeat: "no-repeat",
						backgroundSize: "contain",
						backgroundPosition: "center",
					}}
				>
					<div className="prueba" />
				</div>
				// <img src={mapSelected.displayIcon} className="agent-image" />
			)}
		</div>
	);
}
