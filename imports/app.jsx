import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {picks} from '../api/picks.js';

import Picks from './picks.jsx';

// App component - represents the whole app
class App extends Component {
  renderPicks() {
    return this.props.picks.map((task) => (
      <Picks key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
         <h1>Weeks Pick List</h1>
        </header>

        <ul>
          {this.renderPicks()}
        </ul>

      </div>
    );
  }
}

App.propTypes = {
  picks: PropTypes.array.isRequired,
};



export default createContainer(() => {
  return {
    picks: Picks.find({}).fetch(),
  };
}, App);
