//보통은 {process.env.API_KEY} 저장한다.
const API_KEY = "ae5cadf3939863eb04cb5826443a89b2";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAnimations: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
};

export default requests;

//Genre_lists API
//https://api.themoviedb.org/3/genre/movie/list?api_key=ae5cadf3939863eb04cb5826443a89b2

//https://api.themoviedb.org/3/discover/tv?api_key=ae5cadf3939863eb04cb5826443a89b2&with_network=213