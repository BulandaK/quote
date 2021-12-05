import React, { Component } from "react";

export default class Quote extends Component {
  render() {
    return (
      <div className="quote-container">
        <p>
          <q>{this.props.quote}</q>
        </p>
        <p>{this.props.author}</p>
      </div>
    );
  }
}
