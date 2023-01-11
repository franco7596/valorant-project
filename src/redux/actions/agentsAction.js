import {
	ERROR_GET_AGENTS,
	START_GET_AGENTS,
	SUCCESSFUL_GET_AGENTS,
	START_GET_AGENT,
	ERROR_GET_AGENT,
	SUCCESSFUL_GET_AGENT,
} from "../types";

export const startGetAgents = () => ({
	type: START_GET_AGENTS,
});

export const successfulGetAgents = (agents) => ({
	type: SUCCESSFUL_GET_AGENTS,
	payload: agents,
});

export const errorGetAgents = () => ({
	type: ERROR_GET_AGENTS,
});

export const startGetAgent = (uuidAgent) => ({
	type: START_GET_AGENT,
	payload: uuidAgent,
});

export const successfulGetAgent = (agentSelected) => ({
	type: SUCCESSFUL_GET_AGENT,
	payload: agentSelected,
});

export const errorGetAgent = () => ({
	type: ERROR_GET_AGENT,
});
