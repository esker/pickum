import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class AdminPortal extends Component {
  render() {
    return (
      <div>This is the page to the Admin Portal, allowing users to
       manager the people in their league.</div>
    );
  }
}

// Task.propTypes = {
//   // This component gets the task to display through a React prop.
//   // We can use propTypes to indicate it is required
//   task: PropTypes.object.isRequired,
// };
