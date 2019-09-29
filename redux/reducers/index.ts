import { combineReducers } from 'redux';
import counter from './counter';
import items from './items-reducer';
import item from './item';

const rootReducer = combineReducers({
  counter,
  items,
  item,
});
export default rootReducer;

