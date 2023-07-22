const isEmpty = (element, propriedade, setAnyEmpty) => {
  if (element.current.value === '') {
    element.current.style.borderColor = '#fc4747';
    setAnyEmpty((previous) => ({ ...previous, [propriedade]: true }));
    return false;
  } else {
    element.current.style.borderColor = '#5a698f';
    setAnyEmpty((previous) => ({ ...previous, [propriedade]: false }));
    return true;
  }
};

export default isEmpty;
