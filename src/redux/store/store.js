import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk,logger];

import rootReducer from "../root-reducer/root-reducer";

const store = createStore(rootReducer,applyMiddleware(...middlewares) );

export default store;



