import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { flashMessages } from './flash.messages.reducer';
import { groups } from './groups.reducer';
import { leaderboard } from './leaderboard.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  flashMessages,
  groups,
  leaderboard
});

export default rootReducer;