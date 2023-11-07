import React, { useState } from 'react'

export default function Button({valueButton}) {
    
    /* Hook useState */
    const [inputValue, setInputValue] = useState();
    const [guardado, setGuardado] = useState();

    const rendenrizarInput = (e)=>{
        setInputValue(e.target.value)
    }

    const guardarInput = () => {
        setGuardado(inputValue)
    }

    return (
    <>
        <input type="text" value={inputValue} onChange={rendenrizarInput} />
        <button onClick={guardarInput}>{valueButton}</button>
        <p>Texto generado : {inputValue}</p>
        <p>Texto guardado : {guardado}</p>
    </>
  )
}



