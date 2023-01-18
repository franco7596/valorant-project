import { call, put, takeEvery } from "redux-saga/effects";
import {
	errorGetAgent,
	errorGetAgents,
	successfulGetAgent,
	successfulGetAgents,
} from "../actions/agentsAction";
import apiCall from "../../helpers/apiCall";
import { generateProperties } from "../../helpers/createPorperties";
import { START_GET_AGENT, START_GET_AGENTS } from "../types";

function* getAgents() {
	try {
		const agents = yield call(apiCall, "agents");
		// this agent is just trash from the appi
		let newAgents = agents.filter((agent) => {
			if (agent.uuid !== "ded3520f-4264-bfed-162d-b080e2abccf9") {
				return agent;
			}
		});
		newAgents = newAgents.map((agent) => generateProperties(agent));
		yield put(successfulGetAgents(newAgents));
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
