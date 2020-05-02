import api from './api';

async function authSignin(email, password) {
  let user = null;
  try {
    const response = await api.post('/login', {
      userEmail: email,
      password,
    });

    user = response.data.data;
    if (user.type !== 1) {
      user = null;
    }
  } catch (_err) {
    user = null;
  }
  return user;
}

async function authForgot(email) {
  try {
    const response = await api.post('/forgot_password', {
      userEmail: email,
    });
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

module.exports = {authSignin, authForgot};
