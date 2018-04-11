const initialState = {
  messagesFilter: 'inbox',
  dialogsFilter: 'date',
  data: {},
  currentDialog: ''
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
    case 'ADD_CONVERSATIONS_DATA':
      return {
        ...state,
        data: action.payload
      };
    case 'CHOOSE_DIALOG':
      return {
        ...state,
        currentDialog: action.payload
      };
    default:
      return state;
  }
};

export default conversations;