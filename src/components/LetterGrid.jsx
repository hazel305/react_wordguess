import React from 'react';
import Letter from './Letter';

const LetterGrid = ({secretword, guessedLetters})=>{
    let lettered = secretword
                    .split('')
                    .map((letter,idx)=>{
                    //letter가 guessedLetters와 같다면 true = 1, false = -1
                    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                    return(<Letter key={idx} value={letter} isShown={isShown}/>);
                });
  console.log(lettered);

    return (
        <>
            <p>{lettered}</p>          
        </>
    )
}

export default LetterGrid;