function validatorEmail(email) {
  // <input type="email" id='validator'/>
  const validator = document.querySelector('#validator');

  validator.value = email;

  return validator.checkValidity();
}