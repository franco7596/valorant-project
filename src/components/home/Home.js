import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { useDispatch } from "react-redux";
import { startGetMaps } from "../../redux/actions/mapsAction";
import Carousel from "../carousel/Carousel";
import { startGetAgents } from "../../redux/actions/agentsAction";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const maps = useSelector((state) => state.maps.maps);
	const agents = useSelector((state) => state.agents.agents);
	const [mapSelected, setMapSelected] = useState({});
	const [agentSelected, setAgentSelected] = useState({});
	const dispach = useDispatch();
	const navegation = useNavigate();
	useEffect(() => {
		dispach(startGetMaps());
		dispach(startGetAgents());
	}, []);
	useEffect(() => {
		if (maps) setMapSelected(maps[0]);
	}, [maps]);
	useEffect(() => {
		if (agents) setAgentSelected(agents[0]);
	}, [agents]);

	return (
		<div>
			{maps && (
				<section className="home-section-maps">
					<div className="home-section-maps-info">
						<h3 className="home-section-maps-h3">YOUR MAPS</h3>
						<p className="home-section-maps-p">
							Each map is a playground to showcase your creative thinking.
							Purpose-built for team strategies, spectacular plays, and clutch
							moments. Make the play others will imitate for years to come.
						</p>
						<button
							className="home-section-maps-button"
							onClick={() => navegation(`/Map/${mapSelected.uuid}`)}
						>
							{mapSelected.displayName}
						</button>
					</div>
					<Carousel
						elements={maps}
						image="splash"
						handleInformation={setMapSelected}
					/>
				</section>
			)}
			{agents && (
				<section className="home-section-agents">
					<div className="home-section-agent-info">
						<h3 className="home-section-agent-h3">YOUR AGENTS</h3>
						<p className="home-section-agent-p">
							More than guns and bullets, you’ll choose an Agent armed with
							adaptive, swift, and lethal abilities that create opportunities to
							let your gunplay shine. No two Agents play alike, just as no two
							highlight reels will look the same.
						</p>
						<button
							className="home-section-maps-button"
							onClick={() => navegation(`/Agent/${agentSelected.uuid}`)}
						>
							{agentSelected.displayName}
						</button>
					</div>
					<Carousel
						elements={agents}
						image="bustPortrait"
						handleInformation={setAgentSelected}
						// showNavBar={false}
					/>
				</section>
			)}
		</div>
	);
}
