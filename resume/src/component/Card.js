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
    let descClass = this.state.hover ? "" : "opacity-0";
    let iconClass = this.state.hover ? "opacity-0" : "";

    return (
      <div className="Card"
        onMouseOver={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}>

        <div className="top">
          <div className={`icon ${iconClass}`}>
            {this.props.icon}
          </div>

          <div className={`desc ${descClass}`}>
            {this.props.desc}
          </div>
        </div>

        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default Card;
