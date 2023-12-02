import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Character = () => {

    const { nameCharacter } = useParams()
    const navigate = useNavigate()

    const formatName = (name) => {
        return name.replace("%20", " ")
    }

    const [characters, setCharacters] = useState([])
    const [currentCharacter, setCurrentCharacter] = useState()



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://apisimpsons.fly.dev/api/personajes/find/${formatName(nameCharacter)}`)
            const data = await res.json()
            setCharacters(data.result)
            const matchCharacter = await data.result.find((ch) => ch.Nombre.trim() === formatName(nameCharacter).trim())
            setCurrentCharacter(matchCharacter)
        }
        fetchData()
    }, [])


    return (
        <>
            <button onClick={()=>navigate(-1)}>Atras</button>
            {currentCharacter
            ?
            <div>
                <h2>{currentCharacter.Nombre}</h2>
                <p>Genero{currentCharacter.Genero}</p> 
                <p>Estado{currentCharacter.Estado}</p> 
                <p>Historia{currentCharacter.Historia}</p> 
                <p>Ocupación{currentCharacter.Ocupacion}</p> 
                <img src={currentCharacter.Imagen} alt="" />
            </div>    
            : ""
            }
        </>
    )
}

export default Character