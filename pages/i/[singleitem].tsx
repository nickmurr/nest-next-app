import React from 'react';
import { NextPage } from 'next';
import { Item } from '../../src/items/interfaces/item';
import Link from 'next/link';
import { IReduxContext } from '../../interface';
import { getSingleItem } from '../../redux/actions/item-action';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

interface IProps {
  item: { [key: string]: Item };
}

const SingleItem: NextPage<IProps> = (props) => {
  const { singleitem } = useRouter().query;

  const item = props.item[`${singleitem}`];

  return <div>
    <h1>{item.name}</h1>
    <p>{item.description}</p>
    <p>Quantity: {item.qty}</p>
    <p>id: {item._id}</p>
    <Link scroll={false} href={'/about'}>
      <a href=''>About</a>
    </Link>
  </div>;
};

SingleItem.getInitialProps = async (context: IReduxContext): Promise<any> => {
  const { singleitem } = context.query;
  if (!context.reduxStore.getState().item[`${singleitem}`]) {
    const item = await context.reduxStore.dispatch(getSingleItem(singleitem));
    return await item;
  }
  return Promise.resolve({});
};

const mapStateToProps = (state: any) => ({
  item: state.item,
});

export default connect(mapStateToProps)(SingleItem);
