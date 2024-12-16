import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TypingGame from './components/TypingGame';
import ScorePage from './components/ScorePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TypingGame />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
