import React from 'react';
import Button from './Button';


export default function ButtonGrid({secretword,guessedLetters,letterGuess,isShown,reset}) {

    let letters = [
        'A','B','C','D','E','F','G','H',
        'I','J','K','L','M','N','O','P',
        'Q','R','S','T','U','V','W','X',
        'Y','Z'
    ];

    

    let buttons = letters.map((letter, idx)=>{
        return <Button reset={reset} value={letter} key={idx} onClick={letterGuess}/>  
    })

    //클래스 명에다  hidden 넣어주기 그러므로 공백이 필요
    let className = 'buttons';

    if(isShown){
        className +=" hidden";
    }

  return (
    <div className={className}>
    {buttons}
    </div>
  )
}
