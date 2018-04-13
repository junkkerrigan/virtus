import { combineReducers } from 'redux';
import work from './work';
import conversations from './conversations';
import currentUser from './sign';

export default combineReducers({
  work, conversations, currentUser
});
