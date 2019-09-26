import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Item } from '../src/items/interfaces/item';

interface IProps extends NextPage {
  items: Item[];
}

const Page = (props: IProps) => {
  return (
    <div>
      <h1>Hello nest next!</h1>

      <ul>
        <li>
          <Link href={'/about'}>
            <a href=''>About</a>
          </Link>
        </li>
        <li>
          <Link href={'/test'}>
            <a href=''>Test</a>
          </Link>
        </li>
      </ul>

      {props.items.map(i => {
        return (
          <div key={i._id}>
            <h3>
              <Link href={'/i/[singleitem]'} as={`/i/${i._id}`}>
                <a style={{ textDecoration: 'underline', color: 'black' }} href=''>{i.name}</a>
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

Page.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/items');
  const data = await res.json();

  return {
    items: data,
  };
};

export default Page;
