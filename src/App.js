import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <main className="film-library">
          <div clasName="film-list">
            <h1 className="section-title">FILMS</h1>
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
          </div>
      </main>
    );
  }
}

export default App;
