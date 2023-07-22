/* eslint-disable react/prop-types */
import styles from './Login.module.css';

const GenericButton = ({ text }) => {
  return <button className={styles.idle_btn}>{text}</button>;
};

export default GenericButton;
