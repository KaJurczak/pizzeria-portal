import React from 'react';
import styles from './Booking.module.scss';

const Booking = (value) => {
  const id = value.match.params.id;
  
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>
        Booking {id}
      </h2>
    </div>
  );
};

export default Booking;
