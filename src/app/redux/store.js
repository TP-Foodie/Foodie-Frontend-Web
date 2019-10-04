import { createStore, combineReducers } from 'redux'
import {loading} from "./reducers/loading";

const rootReducer = combineReducers({
    loading
});

const store = createStore(rootReducer);
export default store