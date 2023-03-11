import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.container}>
    <div className={styles.item}>
      <span className={styles.label}>Good:</span>
      <span>{good}</span>
    </div>
    <div className={styles.item}>
      <span className={styles.label}>Neutral:</span>
      <span>{neutral}</span>
    </div>
    <div className={styles.item}>
      <span className={styles.label}>Bad:</span>
      <span>{bad}</span>
    </div>
    <div className={styles.item}>
      <span className={styles.label}>Total:</span>
      <span className={styles.total}>{total}</span>
    </div>
    <div className={styles.item}>
      <span className={styles.label}>Positive feedback:</span>
      <span className={styles.percentage}>{positivePercentage}%</span>
    </div>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
