import React, { Component } from "react";

class LargeButton extends Component {
  render() {
    const { onClick, text } = this.props;
    return (
        <button className="button primary-button large expanded" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export { LargeButton };
