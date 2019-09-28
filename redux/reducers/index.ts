import { combineReducers } from 'redux';
import counter from './counter';
import items from './items-reducer';

const rootReducer = combineReducers({
  counter,
  items,
});
export default rootReducer;

