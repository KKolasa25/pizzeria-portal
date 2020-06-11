import React from 'react';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';

const Order = () => {
  return (
  <div className={styles.component}>
    <h2> Waiter </h2>
    <ul>
      <li>
        <Link to={process.env.PUBLIC_URL + '/waiter/new'}>New Order</Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + '/waiter/order/123abc'}>Single Order</Link>
      </li>
    </ul>
  </div>
  );
};

export default Order;
