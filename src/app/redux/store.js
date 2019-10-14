import { createStore, combineReducers } from 'redux'
import {loading} from "./reducers/loading";
import {handlers} from "./reducers/handlers";

const rootReducer = combineReducers({
    loading,
    handlers
});

const store = createStore(rootReducer);
export default store