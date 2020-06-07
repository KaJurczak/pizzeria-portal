import React from 'react';
import styles from './Order.module.scss';

const Order = (value) => {
  const id = value.match.params.id;
  
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>
        Order {id}
      </h2>
    </div>
  );
};

export default Order;
