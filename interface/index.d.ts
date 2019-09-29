import { NextPageContext } from 'next';

export interface IReduxStore {
  dispatch: (d: any) => void;
  getState: () => IState;
}

export interface IState {
  counter: {
    counter: number,
  };
  items: {
    items: IItems[],
  };
  item: { [key: string]: IItems; };
}

export interface IItems {
  _id: string;
  name: string;
  qty: number;
  description: string;
  __v: number;
}

interface IReduxContext extends NextPageContext {
  reduxStore: IReduxStore;
}
