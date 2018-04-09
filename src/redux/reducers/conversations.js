const initialState = {
  messagesFilter: 'inbox',
  dialogsFilter: 'date'
};

const conversations = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_DIALOGS_FILTER':
      return {
        ...state,
        dialogsFilter: action.payload
      };
    case 'TOGGLE_MESSAGES_FILTER':
      return {
        ...state,
        messagesFilter: action.payload
      };
    default:
      return state;
  }
};

export default conversations;