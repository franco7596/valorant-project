import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./home.css";
import { useDispatch } from "react-redux";
import { startGetMaps } from "../../redux/actions/mapsAction";
import Carousel from "../carousel/Carousel";
import { startGetAgents } from "../../redux/actions/agentsAction";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import TeamImages from "../teamImages/TeamImages";

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
			{maps ? (
				<section className="home-section-maps">
					<div className="home-section-maps-info">
						<h3 className="home-section-h3 text-white">YOUR MAPS</h3>
						<p className="home-section-p text-white">
							Each map is a playground to showcase your creative thinking.
							Purpose-built for team strategies, spectacular plays, and clutch
							moments. Make the play others will imitate for years to come.
						</p>
						<button
							className="home-section-button"
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
			) : (
				<Loading />
			)}
			{agents ? (
				<section className="home-section-agents">
					<div className="home-section-agent-info">
						<h3 className="home-section-h3">YOUR AGENTS</h3>
						<p className="home-section-p">
							More than guns and bullets, you’ll choose an Agent armed with
							adaptive, swift, and lethal abilities that create opportunities to
							let your gunplay shine. No two Agents play alike, just as no two
							highlight reels will look the same.
						</p>
						<button
							className="home-section-button"
							onClick={() => navegation(`/Agent/${agentSelected.uuid}`)}
						>
							{agentSelected.displayName}
						</button>
					</div>
					<Carousel
						elements={agents}
						image="bustPortrait"
						handleInformation={setAgentSelected}
						showNavBar={false}
						showArrows={true}
					/>
				</section>
			) : (
				<Loading />
			)}
			{agents ? (
				<section className="home-section-team">
					<TeamImages agents={agents} />
					<div className="home-section-agent-info">
						<h3 className="home-section-h3 text-white">Crete your own team</h3>
						<p className="home-section-p text-white">
							Here you culd create your own team specific for a map, you are
							going to get the chance to create yours strategis to win all
							maches where you will be involucrate.
						</p>
						<button
							className="home-section-button"
							onClick={() => navegation("/Create_Your_Team")}
						>
							Create Your team
						</button>
					</div>
				</section>
			) : (
				<Loading />
			)}
		</div>
	);
}
