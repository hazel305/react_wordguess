import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';


function App() {
 const [secretWord,setSecretWord] = useState("")

  return (
    <div className="App">
      <h1>Welcome to  Hangman! </h1>
      <p>Do you want to play game?</p>

      <div>
        <GameBoard secretword={secretWord} maxError={6} isShown={secretWord}/>
      </div>
    </div>
  );
}

export default App;
