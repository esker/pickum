import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/app.jsx';
import '../imports/api/picks.js';

Meteor.startup(() => {

  render(<App />, document.getElementById('render-target'));

});
