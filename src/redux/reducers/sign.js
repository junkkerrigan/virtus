const initialState = false;

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGN':
      return action.payload;
    default:
      return state;
  }
};

export default currentUser;