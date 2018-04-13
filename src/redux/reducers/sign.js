const initialState = false;

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGN': {
      console.log(action);
      return action.payload;
    }
    default:
      return state;
  }
};

export default currentUser;