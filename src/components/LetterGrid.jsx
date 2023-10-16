const LetterGrid = ({secretword})=>{
    let lettered = secretword
                    .split('')
                    .map((letter)=><span>{letter}</span>);
  console.log(lettered);
    return (
        <>
            <h3>LetterGrid</h3>
            <p>{lettered}</p>
            
        </>
    )
}

export default LetterGrid;