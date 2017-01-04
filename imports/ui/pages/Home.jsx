import React from 'react';
import classNames from 'classnames';

function Home() {
  return (
    <div className={classNames('Home')} >
      <h1>Welcome to the pickum football pool app</h1>

      <p>
        Any HTML I put in here will be come html on the page, which is why react is so
        cool. Since everything is a component there is no need to worry about having to
        put imports in html and stuff.
      </p>
    </div>
  );
}

export default Home;
