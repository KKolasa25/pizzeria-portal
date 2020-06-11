import React from 'react';
import styles from './TablesBooking.scss';
import PropsTypes from 'prop-types';

const TablesBooking = ({match}) => { // https://www.sitepoint.com/react-router-complete-guide/ 
  return (
    <div className={styles.component}>
      <h2> Reservation </h2>
      <h3> {match.params.id} </h3>
    </div>
  );
};

TablesBooking.propTypes = {
  match: PropsTypes.object,
};

export default TablesBooking;

