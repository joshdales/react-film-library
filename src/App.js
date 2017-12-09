import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <div className="film-library">
          <div clasName="film-list">
            <h1 className="section-title">FILMS</h1>
          </div>
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </main>
    );
  }
}

export default App;
