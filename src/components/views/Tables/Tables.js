import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>
        Tables view
      </h2>
      <nav>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} > Booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} >New Booking</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} >Event</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} >New Event</Link>
      </nav>
    </div>
  );
};

export default Tables;
