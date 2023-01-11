import {
	START_GET_MAPS,
	ERROR_GET_MAPS,
	SUCCESSFUL_GET_MAPS,
	START_GET_MAP,
	ERROR_GET_MAP,
	SUCCESSFUL_GET_MAP,
} from "../types";

export const startGetMaps = () => ({
	type: START_GET_MAPS,
});

export const successfulGetMaps = (maps) => ({
	type: SUCCESSFUL_GET_MAPS,
	payload: maps,
});

export const errorGetMaps = () => ({
	type: ERROR_GET_MAPS,
});

export const startGetMap = (uuidMap) => ({
	type: START_GET_MAP,
	payload: uuidMap,
});

export const successfulGetMap = (MapSelected) => ({
	type: SUCCESSFUL_GET_MAP,
	payload: MapSelected,
});

export const errorGetMap = () => ({
	type: ERROR_GET_MAP,
});
