import { DECREASE_COUNTER, INCREASE_COUNTER } from '../../actions/counter-action/counter-types';

const initialState = {
  counter: 0,
};

export default function(state = initialState, action: any) {
  const { payload, type } = action;

  switch (type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter++,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter--,
      };
    default:
      return state;
  }
}
