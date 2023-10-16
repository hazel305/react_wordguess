import React,{useState} from 'react'
import LetterGrid from './LetterGrid'
import ButtonGrid from './ButtonGrid'

export default function GameBoard({secretword,maxError}) {
    const [guessedLetters,setGuessedLetters] = useState([]);
    const [errorCount, setErrorCount] = useState(0);

    const letterGuessHandler = (letter)=>{
        let val = letter.toLowerCase();
        setGuessedLetters(prev=>[...prev, val]);
        
        /* 만약 secretWord에 val이 없다면 errorCount에 1 더한다.*/
       let newSec  = secretword.toLowerCase();
        if(newSec.indexOf(val) === -1){
           setErrorCount(errorCount+1)
        }
    }
    
 

  return (
    <div>
        <p>남은 횟수 : {maxError -errorCount}</p>
        <LetterGrid secretword={secretword} guessedLetters={guessedLetters}/>  
        <ButtonGrid letterGuess={letterGuessHandler} isShown={errorCount > maxError}/>
    </div>
    
  )
}
