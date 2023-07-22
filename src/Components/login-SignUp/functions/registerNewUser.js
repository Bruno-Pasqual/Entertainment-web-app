const usersArray = localStorage.getItem('usersArray')
  ? JSON.parse(localStorage.getItem('usersArray'))
  : [];

/* returns 
    1 - User already registered 
    2 - user not registered yet, and passwords match
    3 - passwords don't match
  */

function registerNewUser(emailInput, password1, password2) {
  if (usersArray.length >= 1) {
    //existem usuários
    const userAlreadyUsed = usersArray.find(
      (user) => user.user == emailInput.current.value
    );

    if (userAlreadyUsed) {
      return 1;
    }
    if (verificaPasswords(password1, password2)) {
      usersArray.push({
        user: emailInput.current.value,
        password: password1.current.value,
      });
      localStorage.setItem('usersArray', JSON.stringify(usersArray));
      return 2;
    } else {
      return 3;
    }
  } else {
    if (verificaPasswords(password1, password2)) {
      usersArray.push({
        user: emailInput.current.value,
        password: password1.current.value,
      });
      localStorage.setItem('usersArray', JSON.stringify(usersArray));
    } else {
      return 3;
    }
  }
}

//!Funções de verificação

const verificaPasswords = (password1, password2) => {
  return password1.current.value === password2.current.value ? true : false;
};

/* function emailValidation(email) {
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexEmail.test(email);
} */

export default registerNewUser;
