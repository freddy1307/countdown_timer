import React from 'react';
import Seconds from './components/seconds.js';
import Minutes from './components/minutes.js';
import Hours from './components/hours.js';
import Days from './components/days.js';

function App() {
  return (
    <div className="container">
      <div className="row w-100 align-items-center">
          <div className="col-md-3">
            <Days />
          </div>

          <div className="col-md-3">
            <Hours />
          </div>

          <div className="col-md-3">
            <Minutes />
          </div>

          <div className="col-md-3">
            <Seconds />
          </div>
      </div>
    </div>
  );
}

export default App;
