import React from 'react';
import { NextPage } from 'next';
import { Item } from '../../src/items/interfaces/item';

interface IProps extends NextPage {
  item: Item;
}

// @ts-ignore
const SingleItem: NextPage = (props: IProps) => {
  return <div>
    <h1>{props.item.name}</h1>
    <p>{props.item.description}</p>
    <p>Quantity: {props.item.qty}</p>
    <p>id: {props.item._id}</p>
  </div>;
};

SingleItem.getInitialProps = async context => {
  const { singleitem } = context.query;
  const res = await fetch(`http://localhost:3000/items/${singleitem}`);
  const data = await res.json();

  return {
    item: data,
  };
};

export default SingleItem;
