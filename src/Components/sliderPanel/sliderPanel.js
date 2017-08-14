define(['react', 'lodash', './sliderPanel.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'sliderPanel',
    render: template,
    getInitialState: function () {
      return {height: '100px', vPadding: '10px'};
    },
    changeHeight: function (value) {
      this.setState({height: value + 'px'});
    },
    changePadding: function (value) {
      this.setState({vPadding: value + 'px'});
    }
  });

});
