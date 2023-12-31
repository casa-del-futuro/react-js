import React, { useState, useEffect } from 'react';
import './App.css';
import CardCharacter from './components/CardCharacter';


function App() {
  const [characters, setCharacters] = useState([])
  const [count, setCount] = useState(1) 


  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch(`https://apisimpsons.fly.dev/api/personajes?limit=12&page=${count}`)
      const data = await res.json()
      setCharacters(data.docs)
    } 
    fetchData()
  }, [count])

  const handlerSuma = ()=>{
    setCount(count+1)
  }
  const handlerResta = ()=>{
    count==1?setCount(count):setCount(count-1)
  }


  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlerSuma}> + </button>
      <button onClick={handlerResta} > - </button>

      <section className='cards'>
      {characters.map((character,id)=>{
        return(
          <CardCharacter key={id} 
          character={character}/>
          )
      })}
      </section>
    </>
  );
}

export default App;
