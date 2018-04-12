const initialState = {
  messagesFilter: 'inbox',
  dialogsFilter: 'date',
  data: {},
  currentDialog: '',
  lastMessage: true
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
    case 'ADD_MESSAGE':
      return {
        ...state,
        data: action.payload
      };
    case 'CHANGE_LAST_MESSAGE': {
      return {
        ...state,
        lastMessage: !state.lastMessage
      };
    }
    default:
      return state;
  }
};

export default conversations;