import React from 'react'
import { useParams } from 'react-router-dom'

const Player = () => {
    const {idPlayer} = useParams()

return (
    <div>Player {idPlayer}</div>
  )
}

export default Player