import React from 'react';
import styles from './OrderSingle.scss';
import PropsTypes from 'prop-types';

const OrderSingle = ({match}) => { // https://www.sitepoint.com/react-router-complete-guide/ 
  return (
    <div className={styles.component}>
      <h2> Single Order </h2>
      <h3> {match.params.id} </h3> 
    </div>
  );
};

OrderSingle.propTypes = {
  match: PropsTypes.object,
};

export default OrderSingle;
