import React from "react";

function Input({ userInput, onUserInputChange, onSpacePress }) {
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault(); // Prevent default spacebar behavior
      onSpacePress(); // Notify parent when space is pressed
    }
  };

  return (
    <input
      type="text"
      value={userInput}
      onChange={(e) => onUserInputChange(e.target.value)} // Notify parent on input change
      onKeyDown={handleKeyDown} // Listen for spacebar presses
      placeholder="Type here..."
      style={{ marginTop: "20px", padding: "10px", width: "300px" }}
    />
  );
}

export default Input;
