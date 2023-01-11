import createSagaMiddleware from "redux-saga";
import { combineReducers, applyMiddleware, createStore } from "redux";
import reduceMaps from "../reducers/mapsReducers";
import reduceAgents from "../reducers/agentsReducers";
import rootSaga from "../sagas";

const reducer = combineReducers({
	maps: reduceMaps,
	agents: reduceAgents,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
