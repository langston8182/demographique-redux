import {combineReducers} from 'redux';
import ReducerCountry from './reducer-country';

const rootReducer = combineReducers({
    countryReducer: ReducerCountry
});

export default rootReducer;