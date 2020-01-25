import React, {Component, Fragment} from 'react';

export const test = 1;

class ComponentTest extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    return (
      <Fragment>
        Component test
      </Fragment>
    );
  }
}

export default ComponentTest;
