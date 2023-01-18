import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetAgents } from "../../redux/actions/agentsAction";
import { startGetMaps } from "../../redux/actions/mapsAction";
import Carousel from "../carousel/Carousel";
import Loading from "../loading/Loading";
import TeamImages from "../teamImages/TeamImages";
import CardAgent from "./CardAgent";
import CardStatistics from "./CardStatistics";
import "./createTeam.css";
import agentsJSON from "./startAgents.json";

export default function CreateTeam() {
	const maps = useSelector((state) => state.maps.maps);
	const agents = useSelector((state) => state.agents.agents);
	const dispach = useDispatch();
	const [selectedMap, setSelectedMap] = useState(null);
	const [slectedAgent, setSlectedAgent] = useState(agentsJSON.agentsJSON);
	const [optionsAutoComplete, setOptionsAutoComplete] = useState([]);
	useEffect(() => {
		if (agents) {
			let newOptions = [];
			agents.forEach((agent) => {
				if (
					!slectedAgent.some(
						(agentSelected) => agentSelected.uuid === agent.uuid
					)
				) {
					newOptions.push({
						...agent,
						label: agent.displayName,
					});
				}
			});
			setOptionsAutoComplete(newOptions);
		}
	}, [slectedAgent, agents]);

	useEffect(() => {
		if (!maps) dispach(startGetMaps());
		if (!agents) dispach(startGetAgents());
	}, []);
	useEffect(() => {
		if (maps) setSelectedMap(maps[0]);
	}, [maps]);

	const handleChangeSelectedAgent = (agent) => {
		setSlectedAgent([
			...slectedAgent.slice(1, slectedAgent.length),
			{
				bustPortrait: agent.image,
				...agent,
			},
		]);
	};
	const getStatisticsTeam = () => {
		let lurker = 0,
			awp = 0,
			entry = 0,
			stronholders = 0,
			smokeadores = 0,
			spoteadores = 0,
			healers = 0,
			flasheadores = 0;
		slectedAgent.forEach((agent) => {
			lurker += agent.LURKER || 0;
			awp += agent.AWP || 0;
			entry += agent.ENTRY || 0;
			stronholders += agent.STRONHOLDERS || 0;
			smokeadores += agent.SMOKEADORES || 0;
			spoteadores += agent.SPOTEADORES || 0;
			healers += agent.HEALERS || 0;
			flasheadores += agent.FLASHEADORES || 0;
		});
		let contador = 0;
		const objectToSend = {
			LURKER: lurker / 5,
			LURKERStatus: selectedMap.LURKER <= lurker / 5 ? true : false,
			AWP: awp / 5,
			AWPStatus: selectedMap.AWP <= awp / 5 ? true : false,
			ENTRY: entry / 5,
			ENTRYStatus: selectedMap.ENTRY <= entry / 5 ? true : false,
			STRONHOLDERS: stronholders / 5,
			STRONHOLDERSStatus:
				selectedMap.STRONHOLDERS <= stronholders / 5 ? true : false,
			SMOKEADORES: smokeadores / 5,
			SMOKEADORESStatus:
				selectedMap.SMOKEADORES <= smokeadores / 5 ? true : false,
			SPOTEADORES: spoteadores / 5,
			SPOTEADORESStatus:
				selectedMap.SPOTEADORES <= spoteadores / 5 ? true : false,
			HEALERS: healers / 5,
			HEALERSStatus: selectedMap.HEALERS <= healers / 5 ? true : false,
			FLASHEADORES: flasheadores / 5,
			FLASHEADORESStatus:
				selectedMap.FLASHEADORES <= flasheadores / 5 ? true : false,
		};
		Object.keys(objectToSend).forEach((key) => {
			if (objectToSend[key] === true) contador++;
		});
		return {
			...objectToSend,
			surpassedStatistics: contador > 4 ? true : false,
		};
	};

	return maps && agents && selectedMap ? (
		<div className="create_team-container">
			<div className="create_team-container-maps">
				<div>
					<h4 className="create_team-h4">SELECT THE MATCH MAP</h4>
					<p className="create_team-p">
						It is important choose a map in order to now the needs that the team
						have to solve to exploit the mayor probabilities that the map bring
						us so much for the atack how to defend the importance sites.
					</p>
				</div>
				<div className="create_team-container-maps-images">
					<Carousel
						elements={maps}
						image="splash"
						handleInformation={setSelectedMap}
						showNavBar={false}
						showArrows={true}
						colorArrows="var(--black-color)"
					/>
					<div className="create_team-map_Info">
						<h5 className="create_team-h5">{selectedMap.displayName}</h5>
						<img
							src={selectedMap.displayIcon}
							className="create_team-container-maps-img"
						/>
					</div>
				</div>
				<h4 className="create_team-h4">
					STATISTICS OF {selectedMap.displayName}
				</h4>
				<CardStatistics objectSelected={selectedMap} />
			</div>
			<div className="create_team-container-agents">
				<h4 className="create_team-h4">SELECT YOUR TEAM</h4>
				<p className="create_team-p">
					Hear it is important creat your ideal team for the match map selected,
					you have to be carfull with the needs of the map.
				</p>
				<TeamImages agents={slectedAgent} />
				<div className="create_team-container-sutocomplete">
					<h4>SELECT AN AGENT: </h4>
					<Autocomplete
						disablePortal
						options={optionsAutoComplete}
						onChange={(event, value) => handleChangeSelectedAgent(value)}
						sx={{
							width: "300px",
							margin: "0 50px 0 50px",
							backgroundColor: "var(--white-color)",
						}}
						renderInput={(params) => <TextField {...params} label="Agents" />}
					/>
				</div>
				<h4 className="create_team-h4 statistics-team-title">
					STATISTICS OF YOUR TEAM:
				</h4>
				{getStatisticsTeam().surpassedStatistics && (
					<div className="card card-body statistics-surpassed-team-card">
						<h4 className="create_team-h4 statistics-surpassed-team-title">
							You have a good team for this map
						</h4>
					</div>
				)}
				<CardStatistics objectSelected={getStatisticsTeam()} />
				<div className="cards-agents-container">
					{slectedAgent.map((agent) => (
						<CardAgent agent={agent} key={agent.uuid} />
					))}
				</div>
			</div>
		</div>
	) : (
		<Loading />
	);
}
