import React, { Component } from "react";
import "./App.css";
import Keyboard from "./Keyboard";

const HIDDEN = "BONJOUR";
const ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class App extends Component {
  state = {
    keyboard: this.generateKeyboard(),
    wordMapped: this.initWordMapped(),
  };

  generateKeyboard() {
    return ALFABET.split("");
  }

  initWordMapped() {
    const arr = HIDDEN.split("");
    return arr.map((char) => {
      return { charValue: char, found: false };
    });
  }

  // Arrow fx for binding
  handleClick = (index) => {
    const { wordMapped } = this.state;
    const c = ALFABET.charAt(index);
    const newArr = wordMapped.map((tuple) => {
      if (tuple.charValue === c) {
        tuple.found = true;
      }
      return tuple;
    });
    this.setState({ wordMapped: newArr });
  };

  render() {
    const { keyboard, wordMapped } = this.state;
    return (
      <div id="container">
        {wordMapped.map((tuple, index) => (
          <span className="letter" key={index}>
            {wordMapped[index].found ? tuple.charValue : "_"}
          </span>
        ))}
        <Keyboard content={keyboard} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
