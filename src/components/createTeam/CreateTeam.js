import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateTeam } from "../../hooks/useCreateTeam";
import { startGetAgents } from "../../redux/actions/agentsAction";
import { startGetMaps } from "../../redux/actions/mapsAction";
import Carousel from "../carousel/Carousel";
import Loading from "../loading/Loading";
import TeamImages from "../teamImages/TeamImages";
import CardAgent from "./CardAgent";
import CardStatistics from "./CardStatistics";
import "./createTeam.css";

const initialstatistics = {
	LURKER: 0,
	LURKERStatus: false,
	AWP: 0,
	AWPStatus: false,
	ENTRY: 0,
	ENTRYStatus: false,
	STRONHOLDERS: 0,
	STRONHOLDERSStatus: false,
	SMOKEADORES: 0,
	SMOKEADORESStatus: false,
	SPOTEADORES: 0,
	SPOTEADORESStatus: false,
	HEALERS: 0,
	HEALERSStatus: false,
	FLASHEADORES: 0,
	FLASHEADORESStatus: false,
};

export default function CreateTeam() {
	const maps = useSelector((state) => state.maps.maps);
	const agents = useSelector((state) => state.agents.agents);
	const dispach = useDispatch();
	useEffect(() => {
		if (!maps) dispach(startGetMaps());
		if (!agents) dispach(startGetAgents());
	}, []);
	const {
		statisticsTeam,
		handleSelectMap,
		handleChangeSelectedAgent,
		optionsAutoComplete,
		statusTeam,
		selectedMap,
		slectedAgent,
		handleAgentToChange,
	} = useCreateTeam(initialstatistics);

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
						handleInformation={handleSelectMap}
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
				<TeamImages
					agents={slectedAgent}
					changeMidleAgent={handleAgentToChange}
				/>
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
				{statusTeam && (
					<div className="card card-body statistics-surpassed-team-card">
						<h4 className="create_team-h4 statistics-surpassed-team-title">
							You have a good team for this map
						</h4>
					</div>
				)}
				<CardStatistics objectSelected={statisticsTeam} />
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
