import React from 'react'
import LetterGrid from './LetterGrid'
import ButtonGrid from './ButtonGrid'

export default function GameBoard({secretword}) {
  return (
    <>
    <LetterGrid secretword={secretword} guessedLetters={['r','e']}/>  
    <ButtonGrid/>
    </>
    
  )
}
