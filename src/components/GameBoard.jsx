import React from 'react'
import LetterGrid from './LetterGrid'

export default function GameBoard({secretword}) {
  return (
    <>
    <LetterGrid secretword={secretword}/>  
    </>
    
  )
}
