import React from "react";

export default class Hover extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);

    State = { hover: false };

    hoverOn = () => {
      this.setState({ hover: true });
    };
    hoverOff = () => {
      this.setState({ hover: false });
    };
    render = () => {
      return (
        <i
          className={this.state.hover ? "fa fa-heart" : "fa fa-heart-o"}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
        >
          {" "}
          I hover: {this.state.hover ? "yes" : "no"}
        </i>
      );
    };
  }
}
