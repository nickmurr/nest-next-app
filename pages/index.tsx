import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getAllItems } from '../redux/actions/items-action';
import { Item } from '../src/items/interfaces/item';
import { IReduxContext } from '../interface';
import PaperSheet from '../components/main-paper';

interface IProps {
  items: Item[];
}

const Page: NextPage<IProps> = (props: IProps) => {
  return (
    <div>
      <h1 className='header'>Hello nest next!</h1>

      <ul>
        <li>
          <Link scroll={false} href={'/about'}>
            <a href=''>About</a>
          </Link>
        </li>
        <li>
          <Link scroll={false} href={'/test'}>
            <a href=''>Test</a>
          </Link>
        </li>
      </ul>

      {props.items.map(i => {
        return <PaperSheet key={i._id} item={i}/>;
      })}
    </div>
  );
};

Page.getInitialProps = async (context: IReduxContext): Promise<any> => {
  if (!context.reduxStore.getState().items.items) {
    const res = await context.reduxStore.dispatch(getAllItems());
    return await res;
  }
  return Promise.resolve({});
};

const mapStateToProps = (state: any) => ({
  items: state.items.items,
});

export default connect(mapStateToProps)(Page);
