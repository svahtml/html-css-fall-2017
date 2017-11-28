import React, { Component } from 'react';
import './Box.css'

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      active: false
    }
  }
  handleClick() {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    const classNames = this.state.active ? "Box active" : "Box";
    return (
      <div className={classNames} onClick={this.handleClick}>
      <h2>{this.props.title}</h2>
      <p>{this.props.text}</p>
      </div>
    )
  }
}

Box.defaultProps = {
  title: "Default Title",
  text: "Place Holder Text"
}

export default Box;
