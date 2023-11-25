import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({jugador, id}) => {
    const {name,position, number} = jugador
    return (
        <Link to={"/player/"+id} >
            <div class="e-card playing">
            <div class="image"></div>

            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>

            <div class="infotop">
                <h1>{number}</h1>
                <h2>{name}</h2>
                <div class="name">{position}</div>
            </div>

            </div>
        </Link>
    )
}
export default Card