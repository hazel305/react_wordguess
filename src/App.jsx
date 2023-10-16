import React, { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import WordSelect from './components/WordSelect';


function App() {
 const [secretWord,setSecretWord] = useState("");
 const [isShown , setIsShown] = useState(false);

  return (
    <div className="App">
      <h1>Welcome to  Hangman! </h1>
      <p>Do you want to play game?</p>

      <div>
        {isShown ?( <GameBoard secretword={secretWord} maxError={6} isShown={secretWord}/>):(<WordSelect setIsShown={true} WordSelected={val=>{setSecretWord(val); setIsShown(true)}}  />) }
      </div>
    </div>
  );
}

export default App;
