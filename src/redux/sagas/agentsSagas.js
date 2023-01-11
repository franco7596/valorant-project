import { call, put, takeEvery } from "redux-saga/effects";
import {
	errorGetAgent,
	errorGetAgents,
	successfulGetAgent,
	successfulGetAgents,
} from "../actions/agentsAction";
import apiCall from "../api";
import { START_GET_AGENT, START_GET_AGENTS } from "../types";

function* getAgents() {
	try {
		const agents = yield call(apiCall, "agents");
		yield put(successfulGetAgents(agents));
	} catch (error) {
		yield put(errorGetAgents());
	}
}
function* getAgentSelected(info) {
	try {
		const agent = yield call(apiCall, `agents/${info.payload}`);
		yield put(successfulGetAgent(agent));
	} catch (error) {
		yield put(errorGetAgent());
	}
}

export default function* agents() {
	yield takeEvery(START_GET_AGENT, getAgentSelected);
	yield takeEvery(START_GET_AGENTS, getAgents);
}
