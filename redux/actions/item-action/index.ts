import Axios from 'axios';
import { GET_SINGLE_ITEM } from './item-types';

export const getSingleItem = (id: string | string[]) => async (dispatch: any) => {
  const res = await Axios.get(`http://localhost:3000/items/${id}`);
  const data = await res.data;

  await dispatch({
    type: GET_SINGLE_ITEM,
    payload: data,
  });
  return await data;
};
