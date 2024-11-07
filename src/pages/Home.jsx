import { useEffect, useState } from "react";
import { addToWatchLater, addToWatched, getRecommendedMovies } from "../utils/localStorage";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  // Fetch de filmes populares e próximos lançamentos
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularResponse = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=be1cd654ab3efabd5bf7efa1a9b3170a&language=pt-br'
        );
        const popularMoviesData = await popularResponse.json();
        setPopularMovies(popularMoviesData.results);

        const upcomingResponse = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=be1cd654ab3efabd5bf7efa1a9b3170a&language=pt-br'
        );
        const upcomingMoviesData = await upcomingResponse.json();
        setUpcomingMovies(upcomingMoviesData.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);


  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      const movies = await getRecommendedMovies();
      setRecommendedMovies(movies);
    };

    fetchRecommendedMovies();
  }, []);

  const handleAddToWatched = (movieId) => {
    addToWatched(movieId); 
  };

  const handleAddToWatchLater = (movieId) => {
    addToWatchLater(movieId); 
  };

  return (
    <div className="p-4">
      {}
      <h1 className="text-2xl font-bold mb-4">Recomendados para Você</h1>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {recommendedMovies.length > 0 ? (
          recommendedMovies.map((filme) => (
            <MovieCard
              key={filme.id}
              id={filme.id}
              titulo={filme.title}
              imagem_destaque={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              onWatched={() => handleAddToWatched(filme.id)}
              onWatchLater={() => handleAddToWatchLater(filme.id)}
              showRemoveButton={false}  
            />
          ))
        ) : (
          <p>Nenhum filme recomendado no momento.</p>
        )}
      </div>

      {}
      <h1 className="text-2xl font-bold mb-4">Filmes Populares</h1>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {popularMovies.map((filme) => (
          <MovieCard
            key={filme.id}
            id={filme.id}
            titulo={filme.title}
            imagem_destaque={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
            onWatched={() => handleAddToWatched(filme.id)}
            onWatchLater={() => handleAddToWatchLater(filme.id)}
            showRemoveButton={false}  
          />
        ))}
      </div>

      {}
      <h1 className="text-2xl font-bold mb-4">Próximos Lançamentos</h1>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {upcomingMovies.map((filme) => (
          <MovieCard
            key={filme.id}
            id={filme.id}
            titulo={filme.title}
            imagem_destaque={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
            onWatched={() => handleAddToWatched(filme.id)}
            onWatchLater={() => handleAddToWatchLater(filme.id)}
            showRemoveButton={false}  
          />
        ))}
      </div>
    </div>
  );
}
