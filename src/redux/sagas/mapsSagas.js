import { call, put, takeEvery } from "redux-saga/effects";
import {
	errorGetMap,
	errorGetMaps,
	successfulGetMap,
	successfulGetMaps,
} from "../actions/mapsAction";
import apiCall from "../../helpers/apiCall";
import { generateProperties } from "../../helpers/createPorperties";
import { START_GET_MAP, START_GET_MAPS } from "../types";

function* getMaps() {
	try {
		const maps = yield call(apiCall, "maps");
		// this agent is just trash from the appi
		let newMaps = maps.filter((map) => {
			if (map.uuid !== "ee613ee9-28b7-4beb-9666-08db13bb2244") {
				return map;
			}
		});
		newMaps = newMaps.map((map) => generateProperties(map));
		yield put(successfulGetMaps(newMaps));
	} catch (error) {
		yield put(errorGetMaps());
	}
}

function* getMapSelected(info) {
	try {
		const agent = yield call(apiCall, `maps/${info.payload}`);
		yield put(successfulGetMap(agent));
	} catch (error) {
		yield put(errorGetMap());
	}
}

export default function* maps() {
	yield takeEvery(START_GET_MAPS, getMaps);
	yield takeEvery(START_GET_MAP, getMapSelected);
}
