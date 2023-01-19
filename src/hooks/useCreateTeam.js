import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import agentsJSON from "../helpers/startAgents.json";

export function useCreateTeam(initialstatistics) {
	const [selectedMap, setSelectedMap] = useState(null);
	const [slectedAgent, setSlectedAgent] = useState(agentsJSON.agentsJSON);
	const [optionsAutoComplete, setOptionsAutoComplete] = useState([]);
	const [statusTeam, setStatusTeam] = useState(false);
	const [statisticsTeam, setStatisticsTeam] = useState(initialstatistics);
	const [agentToChange, setAgentToChange] = useState(2);
	const maps = useSelector((state) => state.maps.maps);
	const agents = useSelector((state) => state.agents.agents);
	useEffect(() => {
		if (maps) handleSelectMap(maps[0]);
	}, [maps]);
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
			if (selectedMap) getStatisticsTeam();
		}
	}, [slectedAgent, agents, selectedMap]);
	const handleChangeSelectedAgent = (agent) => {
		setSlectedAgent([
			...slectedAgent.slice(0, agentToChange),
			{
				bustPortrait: agent.image,
				...agent,
			},
			...slectedAgent.slice(agentToChange + 1, slectedAgent.length),
		]);
	};
	const handleAgentToChange = (positionAgent) => {
		setAgentToChange(positionAgent);
	};
	const handleSelectMap = (map) => {
		setSelectedMap(map);
	};
	const isItAGoodTeam = (team) => {
		let contador = 0;
		Object.keys(team).forEach((key) => {
			if (team[key] === true) contador++;
		});
		if (contador > 4) {
			setStatusTeam(true);
		} else {
			setStatusTeam(false);
		}
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
		const statisticsTeam = {
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
		isItAGoodTeam(statisticsTeam);
		setStatisticsTeam(statisticsTeam);
	};

	return {
		statisticsTeam,
		handleSelectMap,
		handleChangeSelectedAgent,
		optionsAutoComplete,
		statusTeam,
		selectedMap,
		slectedAgent,
		setOptionsAutoComplete,
		handleAgentToChange,
	};
}
