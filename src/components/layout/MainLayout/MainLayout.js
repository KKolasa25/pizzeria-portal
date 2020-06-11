import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.scss';
import PageNav from '../PageNav/PageNav';


const MainLayout = ({children}) => {

  return (
    <div className={styles.component}>
      <PageNav/>
      {children}
    </div>
  );
};

MainLayout.propTypes  = {
  children: PropTypes.node,
};

export default MainLayout;