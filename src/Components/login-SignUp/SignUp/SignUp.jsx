import { useRef, useState } from 'react';
import InputField from '../InputField';
import GenericButton from '../GenericButton';
import styles from '../Login.module.css';
import BottomText from '../BottomText';
import isEmpty from '../functions/isEmpty';
import registerNewUser from '../functions/registerNewUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate = useNavigate();
  const [emailState, setEmailState] = useState('');
  const [password1State, setPassword1State] = useState('');
  const [password2State, setPassword2State] = useState('');

  //Seleção dos elementos
  const emailInput = useRef(null);
  const password1 = useRef(null);
  const password2 = useRef(null);

  const [anyEmpty2, setAnyEmpty2] = useState({
    email: false,
    password1: false,
    password2: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //Realizando cada um dos isEmpty para colocar os erros nox boxes
    isEmpty(emailInput, 'email', setAnyEmpty2, anyEmpty2, emailState);
    isEmpty(password1, 'password1', setAnyEmpty2, anyEmpty2, password1State);
    isEmpty(password2, 'password2', setAnyEmpty2, anyEmpty2, password2State);

    //Fazendo uma verificação e só rodando o registerNewUser caso nenhum dos campos esteja vazio
    if (
      isEmpty(emailInput, 'email', setAnyEmpty2) &&
      isEmpty(password1, 'password1', setAnyEmpty2) &&
      isEmpty(password2, 'password2', setAnyEmpty2)
    ) {
      //Pega a resposta do registerNewUser e das as respostas de acordo com o retorno
      const conditionOfControl = registerNewUser(
        emailInput,
        password1,
        password2
      );

      if (conditionOfControl === 1) {
        toast.error('User already registered', {
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
        setPassword1State('');
        setPassword2State('');
      } else if (conditionOfControl === 2) {
        toast.success('Successfully registered', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setTimeout(() => navigate('/Entertainment-web-app'), 3500);
      } else if (conditionOfControl === 3) {
        toast.error("Passwords don't match", {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } else {
      toast.error("Can't be empty", {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }

    /* registerNewUser(emailInput, password1, password2); */
  };

  //! ----

  return (
    <div className={styles.parent_element}>
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
        <h3 className={styles.login_title}>Sign Up</h3>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <InputField
            type={'email'}
            placeholder={'Email address'}
            referencia={emailInput}
            array={anyEmpty2}
            propertyName={'email'}
            state={emailState}
            setState={setEmailState}
          />
          <InputField
            type={'password'}
            placeholder={'Password'}
            referencia={password1}
            array={anyEmpty2}
            propertyName={'password1'}
            id={'password1'}
            state={password1State}
            setState={setPassword1State}
          />
          <InputField
            type={'password'}
            placeholder={'Repeat password'}
            referencia={password2}
            array={anyEmpty2}
            propertyName={'password2'}
            id={'password2'}
            state={password2State}
            setState={setPassword2State}
          />
          <GenericButton text={'Create an account'} />
          <BottomText
            basicText={'Already have an account?'}
            highlightText={'Login'}
            toWhere={'Entertainment-web-app'}
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

export default SignUp;
