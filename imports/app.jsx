import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {picks} from './api/picks.js';

import Picks from './ui/picks.jsx';

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

         <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
                <input
                  type="text"
                  ref="textInput"
                  placeholder="Type to add new tasks"
                />
              </form>
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
