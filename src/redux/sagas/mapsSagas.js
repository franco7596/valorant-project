import { call, put, takeEvery } from "redux-saga/effects";
import {
	errorGetMap,
	errorGetMaps,
	successfulGetMap,
	successfulGetMaps,
} from "../actions/mapsAction";
import apiCall from "../api";
import { START_GET_MAP, START_GET_MAPS } from "../types";

function* getMaps() {
	try {
		const maps = yield call(apiCall, "maps");
		yield put(successfulGetMaps(maps));
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
