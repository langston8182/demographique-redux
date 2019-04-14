import {combineReducers} from 'redux';
import ReducerCountry from './reducer-country';
import ReducerRateExchange from './reducer-rate-exchange';

const rootReducer = combineReducers({
    countryReducer: ReducerCountry,
    rateExchangeReducer: ReducerRateExchange
});

export default rootReducer;