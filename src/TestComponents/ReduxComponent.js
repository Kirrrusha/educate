import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchStatuses} from '../redux/modules/statuses';

class ReduxComponent extends Component {
  static defaultProps = {};

  state = {};

  componentDidMount() {
    this.props.fetchStatuses();
  }

  render() {
    return (
      <div>
        {this.props.statuses.map(status => <div key={status.name}>{status.name}</div>)}
        <h1>{this.props.statuses.length && this.props.statuses[0].name}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  statuses: state.statuses.list
});

export default connect(mapStateToProps, {
  fetchStatuses
})(ReduxComponent);
