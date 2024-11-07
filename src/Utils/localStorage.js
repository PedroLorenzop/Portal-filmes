
export const addToWatched = (movieId) => {
    const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    if (!watchedMovies.includes(movieId)) {
      watchedMovies.push(movieId);
      localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    }
  };
  

  export const addToWatchLater = (movieId) => {
    const watchLaterMovies = JSON.parse(localStorage.getItem("watchLaterMovies")) || [];
    if (!watchLaterMovies.includes(movieId)) {
      watchLaterMovies.push(movieId);
      localStorage.setItem("watchLaterMovies", JSON.stringify(watchLaterMovies));
    }
  };
  

  export const getWatchedMovies = () => {
    return JSON.parse(localStorage.getItem("watchedMovies")) || [];
  };
  

  export const getWatchLaterMovies = () => {
    return JSON.parse(localStorage.getItem("watchLaterMovies")) || [];
  };


export const removeFromWatched = (movieId) => {
    const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    const updatedList = watchedMovies.filter(id => id !== movieId);
    localStorage.setItem("watchedMovies", JSON.stringify(updatedList));
  };
  

  export const removeFromWatchLater = (movieId) => {
    const watchLaterMovies = JSON.parse(localStorage.getItem("watchLaterMovies")) || [];
    const updatedList = watchLaterMovies.filter(id => id !== movieId);
    localStorage.setItem("watchLaterMovies", JSON.stringify(updatedList));
  };


export const getRecommendedMovies = async () => {
    const watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    const watchLaterMovies = JSON.parse(localStorage.getItem("watchLaterMovies")) || [];
    
    const movieIds = [...new Set([...watchedMovies, ...watchLaterMovies])]; 


    const recommendedMovies = await Promise.all(
        movieIds.map(async (id) => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=be1cd654ab3efabd5bf7efa1a9b3170a`);
            return response.json();
        })
    );

    return recommendedMovies;
};