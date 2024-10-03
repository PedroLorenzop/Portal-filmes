import { useState } from "react"
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"


export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filmeFiltrados = movies.filter(filme => filme.titulo.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
            <h2>Veja o catalogo completo de filmes</h2>
            <input
            className="text-black"
            type="text"
            id="search"
            value = {search}
            onChange={handleSearch}
            />
            {
                filmeFiltrados.length > 0 ?

                filmeFiltrados
                .map( filme => (
                    <MovieCard key={filme.id} {...filme}/>
                ))
                :
                <p>Filme nnão encontrado</p>
            }
        </>
    )
}