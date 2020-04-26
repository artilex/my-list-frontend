import ApiService from '../../api'

const callLoginApi = (email, password) => {
  if (email !== undefined && password !== undefined) {
    ApiService.init();
    ApiService.post('/auth/login', {
      email,
      password,
    }).then((response) => {
      console.log('Sign in successfully');
      storeAuthData(response.data);
    }).catch((e) => {
      console.log('Error: ' + e);
    });
  }

  return null;
}

const storeAuthData = (data) => {
  localStorage.setItem('token', `Bearer ${data.access_token}`);
}

const auth = (email, password) => {

  callLoginApi(email,password);

  return {
    type: 'SIGN_IN'
  }
}

export default auth;