import React from "react";

function Paragraph({ paragraph, currentWordIndex }) {
  return (
    <p>
      {paragraph.map((word, index) => (
        <span
          key={index}
          style={{
            marginRight: "5px",
            color: index === currentWordIndex ? "white" : "grey", // Highlight the current word
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default Paragraph;
