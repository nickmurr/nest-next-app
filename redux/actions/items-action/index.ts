import { GET_ALL_ITEMS } from './items-types';
import Axios from 'axios';

export const getAllItems = () => async (dispatch: any) => {
  const res = await Axios.get('http://localhost:3000/items');
  const data = await res.data;

  await dispatch({
    type: GET_ALL_ITEMS,
    payload: data,
  });
  return await data;
};
