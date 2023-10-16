import React from 'react';

export default function Letter({value,isShown}) {
    let output = '';
    
    //true면 output에 value를 넣어줘
    if(isShown){
        output = value;
    }

  return (
    <>
      <span>{output}</span>
    </>
  )
}
