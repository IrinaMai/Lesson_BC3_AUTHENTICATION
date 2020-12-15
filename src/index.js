import { refs } from './refs/refs';
import { signUp, signIn, logOut } from './api/api';
import './styles.css';
import { state } from './data/data';

const user = {
  email: '',
  password: '',
};

const resetUser = () => {
  user.email = '';
  user.password = '';
  refs.signInForm.reset();
};

const getUserData = e => {
  if (state.error) {
    document.querySelector('.error').textContent = '';
    refs.errorIn.textContent = '';
    state.error = '';
  }
  const { name, value } = e.target;
  user[name] = value;
};

const signUpData = e => {
  e.preventDefault();
  signUp(user).then(() => {
    refs.signUpForm.reset();
    resetUser();
  });
};

const signInData = async e => {
  e.preventDefault();
  signIn(user).then(resetUser)
};

// __signUpForm
refs.signUpForm.addEventListener('input', getUserData);
refs.signUpForm.addEventListener('submit', signUpData);
// __signInForm
refs.signInForm.addEventListener('input', getUserData);
refs.signInForm.addEventListener('submit', signInData);
// __logout
refs.logoutButton.addEventListener('click', logOut);
