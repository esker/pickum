import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

impor {picks} from '../api/picks.js';

import Picks from './picks.jsx';

// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.picks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
         <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>

      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
};



export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
