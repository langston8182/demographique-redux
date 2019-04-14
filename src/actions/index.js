import axios from 'axios';

export const GET_COUNTRIES = "GET_COUNTRIES";

export function fetchCountries() {
    // Redux thunk
    return function(dispatch) {
        axios.get("https://restcountries.eu/rest/v2/all").then(axiosReponse => {
            dispatch({type: GET_COUNTRIES, payload: axiosReponse.data});
        });
    };
}