import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Character = () => {

    const {idCharacter} = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState([])

    useEffect(()=>{
      const getCharacters = async ()=>{
        const res = await fetch("https://rickandmortyapi.com/api/character/"+idCharacter)
        const data = await res.json()
        setCharacter(data)
      }
  
      getCharacters()
    },[idCharacter])

    const indice = parseInt(idCharacter)

  return (
    <>
        <button onClick={()=> navigate(-1)}>volver</button>
        <div>
            <h1>{character.id}</h1>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <h3>{character.status}</h3>
            <h3>{character.gender}</h3>
            <h3>{character.species}</h3>
        </div>

        <button onClick={()=> navigate("/characters/"+ (indice-1))}>Anterior</button>
        <button onClick={()=> navigate("/characters/"+ (indice+1))}>Siguiente</button>
    </>
  )
}

export default Character