import React from 'react';
import styles from './TablesEvent.scss';
import PropTypes from 'prop-types';

const TablesEvent = ({match}) => { // https://www.sitepoint.com/react-router-complete-guide/ 
  return (
    <div className={styles.component}>
      <h2> Reservation </h2>
      <h3> {match.params.id} </h3>
    </div>
  );
};

TablesEvent.propTypes = {
  match: PropTypes.object,
};

export default TablesEvent;
