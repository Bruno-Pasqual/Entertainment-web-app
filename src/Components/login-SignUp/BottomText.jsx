/* eslint-disable react/prop-types */
import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';

const BottomText = ({ basicText, highlightText, toWhere }) => {
  return (
    <p className={styles.signup_message}>
      {basicText}{' '}
      <NavLink className={styles.link} to={`/${toWhere}`}>
        {highlightText}
      </NavLink>
    </p>
  );
};

export default BottomText;
