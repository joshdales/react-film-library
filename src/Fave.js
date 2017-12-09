import React, { Component } from 'react';

class Fave extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    e.stopPropagation();
    console.log("handling click");
  }

  render() {
    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <i className="material-icons">add_to_queue</i>
      </div>
    );
  }
}

export default Fave;
