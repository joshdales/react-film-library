import React, { Component } from 'react';

class Fave extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isFave: false
    }
  }

  handleClick(e){
    e.stopPropagation();
    console.log("handling click");
  };

  render() {
    const {isFave} = this.state;
    return (
      <div className={`film-row-fave ${isFave ? 'add_to_queue': 'remove_from_queue'}`} onClick={this.handleClick}>
        <i className="material-icons">add_to_queue</i>
      </div>
    );
  }
}

export default Fave;
