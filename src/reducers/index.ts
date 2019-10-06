import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'


/**
 * Root reducer creator
 */
const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
});

export default createRootReducer;