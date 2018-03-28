const initialState = {
  activeTab: 'workflow',
  activeFilter: 'all'
};

const work = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TAB':
      return {
        ...state,
        activeTab: action.payload
      };
    case 'TOGGLE_FILTER':
      return {
        ...state,
        activeFilter: action.payload
      };
    default:
      return state;
  }
};

export default work;
