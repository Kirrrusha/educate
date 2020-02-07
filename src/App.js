import React from 'react';
import './App.css';
import ValidationStateForm from './ValidationStateForm';
import FormikForm from './FormikForm';


class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <ValidationStateForm />
        <hr />
        <FormikForm />
      </React.Fragment>
    );
  }
}

export default App;
