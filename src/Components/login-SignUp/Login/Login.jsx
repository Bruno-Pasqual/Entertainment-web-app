import { useRef, useState } from 'react';
import styles from '../Login.module.css';
import isEmpty from '../functions/isEmpty';
import InputField from '../InputField';
import GenericButton from '../GenericButton';
import BottomText from '../BottomText';
import userExist from '../functions/userExist';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [anyEmpty, setAnyEmpty] = useState({ email: false, password: false });
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = (e) => {
    //Acionado pelo form
    e.preventDefault();
    isEmpty(emailInput, 'email', setAnyEmpty);
    isEmpty(passwordInput, 'password', setAnyEmpty);

    if (userExist(emailState, passwordState) == 0) {
      toast.error("Inputs can't be empty", {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }
    if (userExist(emailState, passwordState) == 1) {
      toast.error('Incorrect user or password', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setEmailState('');
      setPasswordState('');
    }

    if (userExist(emailState, passwordState)) {
      navigate('/Entertainment-web-app/signup');
    }
  };

  return (
    <div className={styles.parent_element}>
      {' '}
      <svg
        className={styles.login_icon}
        width="33"
        height="27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
          fill="#FC4747"
        />
      </svg>
      <div className={styles.login_container}>
        <h3 className={styles.login_title}>Login</h3>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <InputField
            type={'email'}
            placeholder={'Email address'}
            referencia={emailInput}
            array={anyEmpty}
            propertyName={'email'}
            state={emailState}
            setState={setEmailState}
          />
          <InputField
            type={'password'}
            placeholder={'Password'}
            referencia={passwordInput}
            array={anyEmpty}
            propertyName={'password'}
            state={passwordState}
            setState={setPasswordState}
          />
          <GenericButton text={'Login to your account'} />
          <BottomText
            basicText={"Don't have an account?"}
            highlightText={'Sign Up'}
            toWhere={'Entertainment-web-app/signup'}
          />
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
