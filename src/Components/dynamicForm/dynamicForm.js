define(['react', 'lodash', './dynamicForm.rt'], function (React, _, template) {
  'use strict';

  return React.createClass({
    displayName: 'DynamicForm',
    render: template,
    counter: 2,
    getInitialState: function () {
      return {formFields: [
        {key: 0, name: 'name', value:'', type: 'text'},
        {key: 1, name: 'age', value:'', type: 'number'}
      ]};
    },
    handleChange: function (value, field) {
      this.state.formFields[field.key].value = value;
      this.setState({formFields: this.state.formFields});
      window.console.log('field name: ' + field.name + ' field value:' + field.value);
    },
    addNewField: function () {
      const nameValue = document.getElementById('inputName').value;
      const typeInput = document.getElementById('inputType');
      const typeValue = typeInput.options[typeInput.selectedIndex].value;
      const newField = {
        key: this.counter,
        name: nameValue,
        value: '',
        type: typeValue
      };
      this.setState({formFields: [].concat(this.state.formFields).concat(newField)});
      this.counter++;
    }
  });
});
