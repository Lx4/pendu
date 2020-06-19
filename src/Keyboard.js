import React from "react";

const Keyboard = ({ buttons, onClick }) => (
  <div className="keyboard">
    {buttons.map((keypad, index) => (
      // had a bug here with OnClick becauseit seems I was redefining the event onClick={(index) => onClick(index)}>
      <button className={keypad.state+" keypad"}  key={index} onClick={() => onClick(index)}>
        {keypad.charValue}
      </button>
    ))}
  </div>
);

export default Keyboard;

// == Internal helpers ======
