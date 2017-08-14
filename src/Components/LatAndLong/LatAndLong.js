define(['react', 'lodash', './LatAndLong.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'LatAndLong',
    render: template,
    getInitialState: function () {
      return {location: {lat: 0, long: 0}};
    },
    handleChange: function (num, prop) {
      this.state.location[prop] = num;
      this.setState({location: this.state.location});
    }
  });
});
