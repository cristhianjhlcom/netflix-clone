const API_KEY = "7d35a905f0826556fb8d759ea3ba4a3b";

// Exportamos varios endpoints de la api rest IMDB
// para acceder a diferentes categorías o tipos
export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMoviews: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMoviews: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMoviews: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMoviews: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};