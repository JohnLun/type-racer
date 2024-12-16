import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/TypingGame.css";

function ScorePage() {
  // Retrieve the score passed via state
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  const navigate = useNavigate(); // Hook to navigate to the TypingGame page

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if the "Enter" key is pressed
      if (e.key === "Enter") {
        // Navigate back to the TypingGame page when "Enter" is pressed
        navigate('/');
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]); // Ensure it runs only once when the component mounts

  return (
    <div className="d-flex flex-column justify-content-center bg-custom text-white align-items-center vw-100 min-vh-100 text-center">
        <h1 className="display-4">SCORE:</h1>
        <h2 className="display-1 font-weight-bold">{score}</h2>
        <p className="display-4">
          Press <kbd>Enter</kbd> to play again.
        </p>
    </div>
  );
}

export default ScorePage;
