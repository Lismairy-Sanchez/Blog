//Combinacion de reducers
import {combineReducers} from 'redux';
import publicationsReducers from './publicationsReducers';
import usersReducers from './usersReducers';

//importo los reducers

export default combineReducers({
    usersReducers,
    publicationsReducers,
});