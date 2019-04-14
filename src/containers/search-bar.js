import React, {Component} from 'react';
import {fetchCountries} from "../actions";
import {connect} from "react-redux";

class SearchBar extends Component {

    componentWillMount() {
        this.props.fetchCountries();
    }

    renderSelectCountries() {
        return (
          <select className="form-control search_bar">
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

}

const mapStateToProps = (store) => {
    return {
        countries: store.countryReducer.countries
    }
}

const mapDispatchToProps = {
    fetchCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);