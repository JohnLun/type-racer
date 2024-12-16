import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Paragraph from './Paragraph';
import Input from './Input';
import { generate } from 'random-words';
import { useNavigate } from 'react-router-dom';
import "../styles/TypingGame.css";

function TypingGame() {
  const navigate = useNavigate(); // Hook to navigate to different pages
  const [paragraph, setParagraph] = useState(generate(20)); // Generate a random paragraph
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Track current word index
  const [userInput, setUserInput] = useState(""); // User input
  const [score, setScore] = useState(0); // User score
  const [isTimerActive, setIsTimerActive] = useState(false); // Timer state
  const [hasStarted, setHasStarted] = useState(false); // State to track if the game has started

  // Handle space press (for word completion)
  const handleSpacePress = () => {
    if (userInput.trim() === paragraph[currentWordIndex]) {
      setScore(score + 1); // Increment score if correct
    }
    if (currentWordIndex === 19) { // When the 20th word is typed (index 19)
      setParagraph(generate(20)); // Generate a new random paragraph
      setCurrentWordIndex(0); // Reset word index
    } else {
      setCurrentWordIndex(currentWordIndex + 1); // Move to next word
    }
    setUserInput(""); // Clear input
  };

  // Start timer on first input change (when user starts typing)
  useEffect(() => {
    if (!hasStarted && userInput !== "") {
      setIsTimerActive(true); // Start the timer when the first key is pressed
      setHasStarted(true); // Mark the game as started
    }
  }, [userInput, hasStarted]); // Effect that runs when userInput changes

  // Handle timer expiration
  const handleTimerExpiration = () => {
    // Navigate to the /score page with score state
    navigate('/score', { state: { score } });
  };
  

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vw-100 vh-100 bg-custom text-white">
      <div className="text-center p-4 border rounded bg-custom shadow-lg">
        <Timer isTimerActive={isTimerActive} onExpiration={handleTimerExpiration} />
        <h1 className="mb-4">Typing Game</h1>
        <Paragraph paragraph={paragraph} currentWordIndex={currentWordIndex} userInput={userInput} />
        <Input
          userInput={userInput}
          onUserInputChange={setUserInput}
          onSpacePress={handleSpacePress}
        />
        <p className="mt-3">Score: {score}</p>
      </div>
    </div>
  );
  
  
  
}

export default TypingGame;
