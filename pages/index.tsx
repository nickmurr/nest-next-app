import React from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getAllItems } from '../redux/actions/items-action';
import { Item } from '../src/items/interfaces/item';
import { IReduxContext, IReduxStore } from '../interface';

interface IProps {
  items: Item[];
}

const Page: NextPage<IProps> = (props: IProps) => {
  return (
    <div>
      <h1>Hello nest next!</h1>

      <ul>
        <li>
          <Link scroll={false} href={'/about'} replace={true}>
            <a href=''>About</a>
          </Link>
        </li>
        <li>
          <Link scroll={false} href={'/test'} replace={true}>
            <a href=''>Test</a>
          </Link>
        </li>
      </ul>

      {props.items.map(i => {
        return (
          <div key={i._id}>
            <h3>
              <Link scroll={false} href={'/i/[singleitem]'} as={`/i/${i._id}`}>
                <a
                  style={{ textDecoration: 'underline', color: 'black' }}
                  href=''
                >
                  {i.name}
                </a>
              </Link>
            </h3>
            <p>Description: {i.description}</p>
            <p style={{ color: 'blue' }}>Quantity: {i.qty}</p>
          </div>
        );
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
