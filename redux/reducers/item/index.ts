import { GET_SINGLE_ITEM } from '../../actions/item-action/item-types';

const initialState: any = {};

export default function(state = initialState, action: any) {
  const { payload, type } = action;

  switch (type) {
    case GET_SINGLE_ITEM:
      return {
        ...state,
        [payload._id]: payload,
      };
    default:
      return state;
  }
}
