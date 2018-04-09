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

