import React, {Component} from 'react';
import {fetchCountries, fetchRateExchange} from "../actions";
import {connect} from "react-redux";
const lodash = require("lodash");

class SearchBar extends Component {

    componentWillMount() {
        this.props.fetchCountries();
    }

    renderSelectCountries() {
        return (
          <select className="form-control search_bar" onChange={e => this.onChangeCountry(e)}>
              {
                  this.props.countries.map(country => (
                          <option key={country.code} value={country.code}>
                              {country.name}
                          </option>
                      ))
              }
          </select>
        );
    }

    render() {
        return (
          <form className="form-group">
              {this.renderSelectCountries()}
          </form>
        );
    }

    onChangeCountry = event => {
        const countryCode = event.target.value;
        const country = lodash.find(this.props.countries, {code: countryCode});
        this.props.fetchRateExchange(country);
    };
}

const mapStateToProps = (store) => {
    return {
        countries: store.countryReducer.countries
    }
};

const mapDispatchToProps = {
    fetchCountries,
    fetchRateExchange
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);