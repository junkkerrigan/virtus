export const userSign = currentUser => ({ // sign page
  type: 'USER_SIGN',
  payload: currentUser
});

export const toggleWorksTab = tab => ({ // work page
  type: 'TOGGLE_WORKS_TAB',
  payload: tab
});

export const toggleWorksFilter = filter => ({ // work page
  type: 'TOGGLE_WORKS_FILTER',
  payload: filter
});

export const toggleDialogsFilter = filter => ({ // conversations page
  type: 'TOGGLE_DIALOGS_FILTER',
  payload: filter
});

export const toggleMessagesFilter = filter => ({ // conversations page
  type: 'TOGGLE_MESSAGES_FILTER',
  payload: filter
});

export const addConversationsData = data => ({ // conversations page
  type: 'ADD_CONVERSATIONS_DATA',
  payload: data
});

export const chooseDialog = dialog => ({ // conversations page
  type: 'CHOOSE_DIALOG',
  payload: dialog
});

export const addMessage = newData => ({ // conversations page
  type: 'ADD_MESSAGE',
  payload: newData
});

export const changeLastMessage = () => ({ // conversations page
  type: 'CHANGE_LAST_MESSAGE'
});


