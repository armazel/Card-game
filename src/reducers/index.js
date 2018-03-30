import { combineReducers } from 'redux';

import counter from './counter';
import users from './users';
import loaders from './loaders';

export default combineReducers({
    counter,
    users,
    loaders
});