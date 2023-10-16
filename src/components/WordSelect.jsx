import React, { useState } from 'react'

export default function WordSelect({WordSelected}) {
  const [secret, setSecrect] = useState('');


  const handleChange = (e)=>{
    setSecrect(e.target.value);
  }

  const handleSubmit = (e)=>{
   e.preventDefault();
   if(secret.trim() !== ""){
     WordSelected(secret);
  }
  }
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input type="text" onChange={handleChange} placeholder='set a word'></input>
      <button>Set Word</button>
    </form>
  )
}
