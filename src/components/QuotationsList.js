import React, { Component } from "react";
import Quote from "./Quote";

export default class QuotationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AllQuotes: null,
      randomQuotes: [],
      currentQuote: null,
      currentIndex: -1,
    };
  }
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ AllQuotes: data }));
  }
  drawQuote = () => {
    let randomIndex = Math.floor(Math.random() * this.state.AllQuotes.length);
    let randomQuote = this.state.AllQuotes[randomIndex];
    this.setState((state) => ({
      randomQuotes: [...state.randomQuotes, randomQuote],
      currentQuote: randomQuote,
      currentIndex: state.currentIndex + 1,
    }));
  };
  previousQuote = () => {
    let previousQuote = this.state.randomQuotes[this.state.currentIndex - 1];

    this.setState((curState) => ({
      currentQuote: previousQuote,
      currentIndex: curState.currentIndex - 1,
    }));
  };
  render() {
    return (
      <div>
        <div className="btns">
          <button onClick={this.drawQuote}>wylosuj cytat</button>
          {this.state.currentIndex <= 0 ? (
            <button disabled>poprzedni cytat</button>
          ) : (
            <button onClick={this.previousQuote}>poprzedni cytat</button>
          )}
        </div>
        {this.state.currentQuote != null ? (
          <Quote
            author={this.state.currentQuote.author}
            quote={this.state.currentQuote.quote}
          />
        ) : (
          <Quote />
        )}
      </div>
    );
  }
}
