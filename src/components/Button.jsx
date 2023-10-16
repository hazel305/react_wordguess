import React, { useState } from 'react';


export default function Button({value, onClick}) {
    const [isClicked, setIsClicked] = useState(false);

    let className = ""; //기본값은 비어있기
    if(isClicked){
        className+=' guessed'; //만약 클릭이 되면 기존 클래스 명에 붙여야 하므로 앞에 공백 한칸 필요
    }

    const clickHandler = ()=>{
        setIsClicked(!isClicked);
        onClick(value);
    }

 
  return (
    <button className={className} onClick={clickHandler}>{value}</button>
  )
}
