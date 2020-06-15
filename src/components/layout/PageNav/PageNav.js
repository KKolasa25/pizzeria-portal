import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => {
  return (
    <nav className={styles.component}>
      <NavLink to={`${process.env.PUBLIC_URL}/home`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
        <Button variant="outlined" size="large">
          Home
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
      <Button variant="outlined" size="large">
          Login
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
      <Button variant="outlined" size="large">
          Tables
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
      <Button variant="outlined" size="large">
          Waiter
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
      <Button variant="outlined" size="large">
          Kitchen
        </Button>
      </NavLink>
    </nav>
  );
};

  export default PageNav;