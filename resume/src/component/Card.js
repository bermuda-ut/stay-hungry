import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <div className="icon">
          {this.props.icon}
        </div>
        <h1>{this.props.title}</h1>
        {this.props.desc}
      </div>
    );
  }
}

export default Card;
