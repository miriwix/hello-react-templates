define(['react', 'lodash', './countryCity.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'CountryCity',
    render: template,
    getInitialState: function () {
      return {isDisabled: true,
        selectedCountry: '',
        countries: [
        {key: 0, name: 'Israel', cities:['Tel Aviv', 'Jerusalem', 'Beer Sheva']},
        {key: 1, name: 'USA', cities:['NYC', 'Washington DC', 'Miami']},
        {key: 2, name: 'China', cities:['Beijing', 'Shanghai']}
      ]};
    },
    updateSelectedCountry: function () {
      const countryInput = document.getElementById('countriesSelect');
      const countryValue = countryInput.options[countryInput.selectedIndex].value;
      this.setState({selectedCountry: _.filter(this.state.countries, { 'name': countryValue})[0]});
    },
    updateSelectedCity: function (val) {
      this.setState({isDisabled: val !== '' ? false : true});
    }
  });
});
