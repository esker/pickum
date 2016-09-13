import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Pick extends Component {
  render() {
    return (
      <li>{this.props.picks.text}</li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
