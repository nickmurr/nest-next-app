import { GET_ALL_ITEMS } from '../../actions/items-action/items-types';

const initialState: any = {};

export default function(state = initialState, action: any) {
  const { payload, type } = action;

  switch (type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        items: payload,
      };

    default:
      return state;
  }
}
