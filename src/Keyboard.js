import React from "react";

const Keyboard = ({ content, onClick }) => (
  <div className="keyboard">
    {content.map((keypad, index) => (
      // had a bug here with OnClick becauseit seems I was redefining the event onClick={(index) => onClick(index)}>
      <button className="keypad" key={index} onClick={() => onClick(index)}>
        {keypad}
      </button>
    ))}
  </div>
);

export default Keyboard;

// == Internal helpers ======
