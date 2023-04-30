import * as redux from "redux";
import thunk from "redux-thunk";
import { MovieReducer } from "../reducers/moviesReducer";
import {middleware} from "../middlewares/logger.middleware";

const store = redux.createStore(MovieReducer, redux.applyMiddleware(middleware, thunk));

export default store;
