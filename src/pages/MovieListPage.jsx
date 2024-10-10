import { useState, useEffect } from "react"
import movies from "../data/movies.json"
import MovieCard from "../components/MovieCard"


export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=be1cd654ab3efabd5bf7efa1a9b3170a&language=pt-br')

        .then(data => data.json() )
        .then(data => setFilmes(data.results))
        .catch(erro => console.log(erro))
        .finally(() => console.log("Fim"))
    }, [])
    

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
            <section className="flex">
            {
               filmes.map(filme => (
                <>
                    <h1>{filme.title}</h1>
                    <p>{filme.vote_average}</p>
                    <img src={`https://image.tmdb.org/t/p/w154${filme.poster_path}`} alt={filme.title}/>
                    
                </>
                
               ))
                
               
            }
            </section>
           
        </>
    )
}