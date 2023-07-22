/* eslint-disable react/prop-types */
import styles from './Login.module.css';
const InputField = ({
  type,
  placeholder,
  referencia,
  array,
  propertyName,
  id,
  state,
  setState,
}) => {
  return (
    <div className={styles.inputLine}>
      <input
        onChange={(e) => {
          setState(e.target.value);
        }}
        className={styles.input_field}
        type={type}
        name={`${type}-input`}
        id={id ? `${id}` : `${type}-input`}
        placeholder={placeholder}
        ref={referencia ? referencia : null}
        value={state}
      />

      {array[propertyName] && (
        <p className={styles.error_message}>Can&apos;t be empty</p>
      )}
    </div>
  );
};

export default InputField;
