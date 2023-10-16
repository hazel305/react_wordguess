import React,{useState} from 'react'
import LetterGrid from './LetterGrid'
import ButtonGrid from './ButtonGrid'

export default function GameBoard({secretword}) {
    const [guessedLetters,setGuessedLetters] = useState([]);
    const letterGuessHandler = (letter)=>{
        let val = letter.toLowerCase();
        setGuessedLetters(prev=>[...prev, val]);
    }
  return (
    <>
    <LetterGrid secretword={secretword} guessedLetters={guessedLetters}/>  
    <ButtonGrid letterGuess={letterGuessHandler}/>
    </>
    
  )
}
