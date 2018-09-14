import React, { Component } from 'react';
import svgLogo from './sanmu.svg';

class Logo extends Component {
  render() {
    let style = {};
    if(this.props.color || this.props.colour)
      style.fill = this.props.color ? this.props.color : this.props.colour;

    return (
      <svg style={style} viewBox="0 0 1024 622.184">
        <use xlinkHref={`${svgLogo}#logo`}/>
      </svg>
    );
  }
}

export default Logo;
