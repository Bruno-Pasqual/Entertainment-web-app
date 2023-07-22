function userExist(email, password) {
  // 0 - Campos vazios
  // 1 - Usuário achado mas senha incorreta
  // true - Usuário achado e credênciais batem

  if (email === '' || password === '') return 0;

  //Puxando o array de usuários do local storage
  const usersArray = localStorage.getItem('usersArray')
    ? JSON.parse(localStorage.getItem('usersArray'))
    : [];

  if (usersArray.length >= 1) {
    const foundUser = usersArray.find((user) => user.user === email);

    if (foundUser) {
      //usuário existe

      if (foundUser.password === password) {
        //a senha está correta

        return true;
      } else {
        // a senha está incorreta

        return 1;
      }
    } else {
      // Nenhum usuário corresponde ao email passado, usuário
      return 1;
    }
  } else {
    // Não tem nenhum usuário cadastrado

    return 1;
  }
}

export default userExist;
