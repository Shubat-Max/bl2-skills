import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const history = createBrowserHistory();


/**
 * configure store
 */
const configureStore = (preLoadedState?: any): any => {
  return createStore(
    createRootReducer(history),
    preLoadedState ? preLoadedState : {},
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger
      )
    )
  );
};

export default configureStore;
