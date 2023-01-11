import { all } from "redux-saga/effects";
import maps from "./mapsSagas";
import agents from "./agentsSagas";

export default function* rootSaga() {
	yield all([maps(), agents()]);
}
