import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import './App.css';
import ComponentTest from './ComponentTest';
import Component1 from './TestComponents/Component1';
import ChangeComponent from './TestComponents/ChangeComponent';
import ReduxComponent from './TestComponents/ReduxComponent';

const store = configureStore();

class App extends React.Component {

  state = {
    value: ''
  };

  onChangeParentValue = (value) => {
    this.setState({value});
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ComponentTest/>
          <Component1/>
          <Component1
            param1={this.state.value}
            param2='test1'
          />
          <ChangeComponent
            onChangeInput={this.onChangeParentValue}
          />
          <ReduxComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
