import { useState } from "react"

import (useState)



export default function MovieListPage(){

const [contador, setContador] = useState(0)
const [textoBotao, setTexto] = useState("Oi")

const handleClick = () => {
    setContador((prev) => prev + 1)
    
}
const handleClick2 = () => {
    setContador((prev) => prev - 1)
}

const handleClick3 = () => {
    setContador(0)
}

const handleClick4 = () => {
    setTexto(prev => prev === "Oi" ? "Mudou" : "Oi")
}



    return(
        <>
            <p>{contador}</p>
            <button onClick={handleClick}>Aumentar</button><br/>
            <button onClick={handleClick2}>Diminuir</button><br/>
            <button onClick={handleClick3}>Zerar</button><br/>
            <button onClick={handleClick4}>{textoBotao}</button><br/>
        </>
    )
}


