export default (state = {}, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return true;
    case 'SIGN_OUT':
      return false;
  }
  return state;
}