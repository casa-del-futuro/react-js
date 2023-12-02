import React from 'react'
import "./cardCharacter.css"
import { Link } from 'react-router-dom'

const CardCharacter = ({character}) => {
  return (
    <article className="card">
        <h2>{character.Nombre}</h2>
        <h3>{character.Ocupacion}</h3>
        <img src={character.Imagen} alt={character.Nombre} />
        <Link to={"/"+character.Nombre}>VER MAS</Link>
    </article>
  )
}

export default CardCharacter