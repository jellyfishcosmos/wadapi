export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f2c9873119e0141328e89750c5f3bb4d&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };