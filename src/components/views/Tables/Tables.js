import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
  <div className={styles.component}>
    <h2> Tables </h2>
    <ul>
      <li>
        <Link to={process.env.PUBLIC_URL + '/tables/booking/:id'}>Reservation</Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + '/tables/event/:id'}>Event</Link>
      </li>
    </ul>
  </div>
  );
};

export default Tables;
