import React, {Component} from 'react';

class ChangeComponent extends Component {
  static defaultProps = {

  };

  static propTypes = {};

  state = {};

  render() {
    const {onChangeInput} = this.props;
    return (
      <div>
        <input
          onChange={(event) => onChangeInput(event.target.value)}
        />
      </div>
    );
  }
}

export default ChangeComponent;
