import { combineReducers } from 'redux';
import work from './work';
import conversations from './conversations';

export default combineReducers({
  work, conversations
});
