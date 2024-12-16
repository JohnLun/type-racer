import React from "react";

function Paragraph({ paragraph, currentWordIndex, userInput }) {
  const currentWord = paragraph[currentWordIndex];

  return (
    <p>
      {paragraph.map((word, index) => {
        if (index === currentWordIndex) {
          return (
            <span key={index} style={{ marginRight: "5px" }}>
              {currentWord.split("").map((letter, i) => {
                const color =
                  i < userInput.length
                    ? letter === userInput[i]
                      ? "green"
                      : "red"
                    : "white";
                return (
                  <span key={i} style={{ color }}>
                    {letter}
                  </span>
                );
              })}
            </span>
          );
        }

        return (
          <span
            key={index}
            style={{
              marginRight: "5px",
              color: index < currentWordIndex ? "grey" : "white",
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}

export default Paragraph;
