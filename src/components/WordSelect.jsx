import React, { useState } from 'react'

export default function WordSelect({WordSelected}) {
  const [secret, setSecrect] = useState('');


  const handleChange = (e)=>{
    setSecrect(e.target.value);
  }

  const handleSubmit = (e)=>{
   e.preventDefault();
   WordSelected(secret);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}></input>
      <button>Set Word</button>
    </form>
  )
}
