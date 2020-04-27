export const getMeAction = (id, email) => {
      return {
        type: 'GET_ME',
        id,
        email,
        isAuth: true
      };
}