import {
	ERROR_GET_AGENTS,
	START_GET_AGENTS,
	SUCCESSFUL_GET_AGENTS,
	START_GET_AGENT,
	ERROR_GET_AGENT,
	SUCCESSFUL_GET_AGENT,
} from "../types";

const initialState = {
	error: false,
	loading: false,
	agents: null,
	agentSelected: null,
};

export default function reduceMaps(state = initialState, action) {
	switch (action.type) {
		case START_GET_AGENTS:
		case START_GET_AGENT:
			return {
				...state,
				loading: true,
			};
		case ERROR_GET_AGENTS:
		case ERROR_GET_AGENT:
			return {
				...state,
				loading: false,
				error: true,
			};
		case SUCCESSFUL_GET_AGENTS:
			return {
				...state,
				loading: false,
				agents: action.payload,
			};
		case SUCCESSFUL_GET_AGENT:
			return {
				...state,
				loading: false,
				agentSelected: action.payload,
			};
		default:
			return state;
	}
}
