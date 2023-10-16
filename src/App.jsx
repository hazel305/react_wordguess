import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';


function App() {
 

  return (
    <div className="App">
      <h1>Welcome to  Hangman! </h1>
      <p>Do you want to play game?</p>

      <div>
        <GameBoard secretword="react" maxError={6}/>
      </div>
    </div>
  );
}

export default App;
