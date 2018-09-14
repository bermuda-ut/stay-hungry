import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  render() {
    let descStyle = {
      opacity: this.state.hover ? "1" : "0",
    }
    let iconStyle = {
      opacity: this.state.hover ? "0.07" : "1",
    }

    return (
      <div className="Card"
        onMouseOver={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}>

        <div className="top">
          <div className="icon" style={iconStyle}>
            {this.props.icon}
          </div>

          <div className="desc" style={descStyle}>
            {this.props.desc}
          </div>
        </div>

        <h1 style={iconStyle}>{this.props.title}</h1>
      </div>
    );
  }
}

export default Card;
