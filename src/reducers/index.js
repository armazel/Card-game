import { combineReducers } from 'redux';

import counter from './counter';
import users from './users';
import loaders from './loaders';
import auth from './auth';

export default combineReducers({
    counter,
    users,
    loaders,
    auth
});