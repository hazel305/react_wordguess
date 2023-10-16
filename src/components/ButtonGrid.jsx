import React from 'react';
import Button from './Button';


export default function ButtonGrid({secretword,guessedLetters,letterGuess}) {

    let letters = [
        'A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X',
        'Y','Z'
    ];

    

    let buttons = letters.map((letter, idx)=>{
        return <Button value={letter} key={idx} onClick={letterGuess}/>  
    })

  return (
    <div className='buttons'>
    {buttons}
    </div>
  )
}
