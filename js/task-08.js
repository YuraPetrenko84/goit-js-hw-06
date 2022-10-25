const form = document.querySelector('.login-form');

form.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    return alert('Всі поля мають бути заповнені');
  }
  const dataInput = {
    email: email.value,
    password: password.value,
  };

  console.log(dataInput);
  //  console.log(evt.currentTarget.elements);

  evt.currentTarget.reset();
}
