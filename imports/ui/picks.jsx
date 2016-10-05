import React, { Component, PropTypes } from 'react';

export default class Pick extends Component {
  render() {
    return (
      <li>{this.props.picks.text}</li>
    );
  }
}

Pick.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  pick: PropTypes.object.isRequired,
};
