import React, {Component} from 'react';
import {every, values} from 'lodash';


class ValidationStateForm extends Component {

  state = {
    formData: {
      name: '',
      age: ''
    },
    formValidation: {
      name: {isValid: true, errorMessage: null},
      age: {isValid: true, errorMessage: null}
    },
    buttonEnabled: false
  };

  onChangeName = (event) => {
    const {value} = event.target;
    const nextFormValidation = this.validateName(value);
    const nextState = {
      ...this.state,
      formData: {...this.state.formData, name: value},
      formValidation: nextFormValidation
    };

    this.setState({
      ...nextState,
      buttonEnabled: this.isValidForm(nextState)
    });
  };

  validateName = name => {
    let isValid = true;
    let errorMessage = null;

    if (name.length === 0) {
      isValid = false;
      errorMessage = 'Поле не должно быть пустым';
    } else if (name.length > 10) {
      isValid = false;
      errorMessage = 'Длина строки больше 10';
    }

    return {
      ...this.state.formValidation,
      name: {isValid, errorMessage}
    };
  };

  onChangAge = (event) => {
    const {value} = event.target;
    const nextFormValidation = this.validateAge(value);
    const nextState = {
      ...this.state,
      formData: {...this.state.formData, age: value},
      formValidation: nextFormValidation
    };

    this.setState({
      ...nextState,
      buttonEnabled: this.isValidForm(nextState)
    });
  };

  validateAge = age => {
    let isValid = true;
    let errorMessage = null;

    if (+age > 70) {
      isValid = false;
      errorMessage = 'Слишком стар'
    } else if (+age < 20) {
      isValid = false;
      errorMessage = 'Слишком молод';
    }

    return {
      ...this.state.formValidation,
      age: {isValid, errorMessage}
    };
  };


  isValidForm = nextState => {
    const {formValidation, formData} = nextState;

    const isValid = every(values(formValidation), {isValid: true}); // проверка что все поля валидны
    const isRequiredFilled = every([formData.name], (value) => (!!value)); // проверка, что поле name заполненно, оно обязательное

    return isValid && isRequiredFilled;
  };

  render() {
    const {formData: {name, age}, formValidation, buttonEnabled} = this.state;
    return (
      <>
        <div>
          <input
            type="text"
            value={name}
            name="name"
            required
            onChange={this.onChangeName}
          />
          {!formValidation.name.isValid && <span>{formValidation.name.errorMessage}</span>}
        </div>
        <div>
        <input
          type="text"
          value={age}
          name="age"
          onChange={this.onChangAge}
        />
        {!formValidation.age.isValid && <span>{formValidation.age.errorMessage}</span>}
        </div>
        <button
          disabled={!buttonEnabled}
        >Отправить
        </button>
      </>
    );
  }
}

export default ValidationStateForm;
