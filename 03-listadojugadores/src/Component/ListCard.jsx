import React, { useState } from 'react'
import Card from './Card'

const ListCard = () => {

    const [list, setList] = useState([
        {
          name: "Lionel Messi",
          position: "Forward",
          number: "10"
        },
        {
          name: "Cristiano Ronaldo",
          position: "Forward",
          number: "7"
        },
        {
          name: "Neymar Jr",
          position: "Forward",
          number: "10"
        },
        {
          name: "Kylian Mbappe",
          position: "Forward",
          number: "7"
        },
        {
          name: "Robert Lewandowski",
          position: "Forward",
          number: "9"
        },
        {
          name: "Kevin De Bruyne",
          position: "Midfielder",
          number: "17"
        },
        {
          name: "Sergio Ramos",
          position: "Defender",
          number: "4"
        },
        {
          name: "Virgil van Dijk",
          position: "Defender",
          number: "4"
        },
        {
          name: "Manuel Neuer",
          position: "Goalkeeper",
          number: "1"
        },
        {
          name: "Mohamed Salah",
          position: "Forward",
          number: "11"
        }
      ])

    return (
        <>
            {list.map((jugador, index)=>{
                return(<Card id={index} key={index} jugador={jugador} />)
            })}
        </>
    )
}

export default ListCard