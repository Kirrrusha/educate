import React, {Component} from 'react';

class Component1 extends Component {
  static defaultProps = {
    param1: 'param11232431',
    param2: 'param2'
  };

  state = {};

  render() {
    const {param1, param2} = this.props;
    return (
      <div style={{'margin': '10px'}}>
        <div>Параметр 1 - {param1}</div>
        <div>Параметр 2 - {param2}</div>
      </div>
    );
  }
}

export default Component1;
