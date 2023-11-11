import React from 'react'

const Card = ({jugador}) => {
    const {name,position, number} = jugador
    return (
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
    )
}
export default Card