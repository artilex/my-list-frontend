const initialState = {
  id: 0,
  email: '',
  isAuth: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ME':
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
}