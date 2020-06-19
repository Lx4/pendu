import React, { Component } from "react";
import "./App.css";
import Keyboard from "./Keyboard";

const HIDDEN = "BONJOUR";
const ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class App extends Component {
  state = {
    keyboard: this.generateKeyboard(),
    wordMapped: this.initWordMapped(),
    fails: 0,
  };

  generateKeyboard() {
    const alf = ALFABET.split("");
    return alf.map((char) => {
      return { charValue: char, state: "default" };
    });
  }

  initWordMapped() {
    const arr = HIDDEN.split("");
    return arr.map((char) => {
      return { charValue: char, found: false };
    });
  }

  // Arrow fx for binding
  handleClick = (index) => {
    const { wordMapped, keyboard } = this.state;
    let { fails } = this.state;

    let letterFound = false;

    // Handling Keyboard
    const c = keyboard[index].charValue;
    
    const newArr = wordMapped.map((tuple) => {
      if (tuple.charValue === c) {
        tuple.found = true;
        letterFound = true;
      }
      return tuple;
    });
    if (!letterFound) {
      fails++;
      keyboard[index].state = "letter-not-found";
    }
    else{
      keyboard[index].state = "letter-found";
    }
    this.setState({ wordMapped: newArr, fails: fails });
  };

  render() {
    const { keyboard, wordMapped, fails } = this.state;
    if (fails >= 10) return <div>lol t nul.</div>;
    const won = wordMapped.reduce(function (a, b) {
      return a & b.found;
    }, wordMapped[0].found);
    return (
      <div id="container">
        {wordMapped.map((tuple, index) => (
          <span className="letter" key={index}>
            {wordMapped[index].found ? tuple.charValue : "_"}
          </span>
        ))}
        <Keyboard buttons={keyboard} onClick={this.handleClick} />
        {won && <div>GG BRO</div>}
        <button>Restart</button>
        <div>Number of fails : {fails}</div>
      </div>
    );
  }
}

export default App;
