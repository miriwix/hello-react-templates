define(['react', 'lodash', './inputForm.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'InputForm',
    render: template,
    getInitialState: function () {
      return {name: new URL(document.location.href).searchParams.get('name')};
    },
    handleChange: function (name) {
      this.setState({name: name});
    }
  });
});
