import {
	START_GET_MAPS,
	ERROR_GET_MAPS,
	SUCCESSFUL_GET_MAPS,
	START_GET_MAP,
	ERROR_GET_MAP,
	SUCCESSFUL_GET_MAP,
} from "../types";

const initialState = {
	error: false,
	loading: false,
	maps: null,
	mapSelected: null,
};

export default function reduceMaps(state = initialState, action) {
	switch (action.type) {
		case START_GET_MAPS:
		case START_GET_MAP:
			return {
				...state,
				loading: true,
			};
		case ERROR_GET_MAPS:
		case ERROR_GET_MAP:
			return {
				...state,
				loading: false,
				error: true,
			};
		case SUCCESSFUL_GET_MAPS:
			return {
				...state,
				loading: false,
				maps: action.payload,
			};
		case SUCCESSFUL_GET_MAP:
			return {
				...state,
				loading: false,
				mapSelected: action.payload,
			};
		default:
			return state;
	}
}
