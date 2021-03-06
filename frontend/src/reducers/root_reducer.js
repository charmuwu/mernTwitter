import { combineReducers } from 'redux';
import session from './session_reducer';
import TweetsReducer from './tweets_reducer';

const RootReducer = combineReducers({
  session,
  tweets: TweetsReducer
});

export default RootReducer;