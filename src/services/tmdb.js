const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '1866d4d6f557cf8d68d1ba2cc55755d1';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxODY2ZDRkNmY1NTdjZjhkNjhkMWJhMmNjNTU3NTVkMSIsIm5iZiI6MTc4ODMxNjcwNi4xNjQsInN1YiI6IjZhOTc4YzIyMDY0ZDgwNDBiZmNjZWNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77U5ygnWK84kVdlSRUDP45wQlybrW9WjGPXImEPULnQ';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${BEARER_TOKEN}`
};

// Generic fetcher helper
async function fetchTMDB(endpoint, params = {}) {
  try {
    const url = new URL(`${BASE_URL}${endpoint}`);
    url.searchParams.append('api_key', API_KEY);
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, params[key]);
      }
    });

    const response = await fetch(url.toString(), { method: 'GET', headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return null;
  }
}

// Get Poster URL
export function getImageUrl(path, size = 'w500') {
  if (!path) return 'https://via.placeholder.com/500x750?text=No+Image';
  return `${IMAGE_BASE_URL}${size}${path}`;
}

// Get Backdrop URL
export function getBackdropUrl(path, size = 'original') {
  if (!path) return 'https://via.placeholder.com/1280x720?text=No+Backdrop';
  return `${IMAGE_BASE_URL}${size}${path}`;
}

// API Methods
export const tmdbApi = {
  // Trending & Hero items
  getTrending: (mediaType = 'movie', timeWindow = 'day') => fetchTMDB(`/trending/${mediaType}/${timeWindow}`),
  
  // Movies
  getPopularMovies: (page = 1) => fetchTMDB('/movie/popular', { page }),
  getTopRatedMovies: (page = 1) => fetchTMDB('/movie/top_rated', { page }),
  getUpcomingMovies: (page = 1) => fetchTMDB('/movie/upcoming', { page }),
  
  // Series / TV Shows
  getPopularSeries: (page = 1) => fetchTMDB('/tv/popular', { page }),
  getTopRatedSeries: (page = 1) => fetchTMDB('/tv/top_rated', { page }),
  
  // Anime (Animation Genre ID = 16)
  getAnimeMovies: (page = 1) => fetchTMDB('/discover/movie', { with_genres: '16', page, sort_by: 'popularity.desc' }),
  getAnimeSeries: (page = 1) => fetchTMDB('/discover/tv', { with_genres: '16', page, sort_by: 'popularity.desc' }),
  
  // Details (with credits, videos, recommendations)
  getMovieDetails: (id) => fetchTMDB(`/movie/${id}`, { append_to_response: 'credits,videos,recommendations,similar' }),
  getTvDetails: (id) => fetchTMDB(`/tv/${id}`, { append_to_response: 'credits,videos,recommendations,similar' }),
  
  // Search
  searchMulti: (query, page = 1) => fetchTMDB('/search/multi', { query, page }),
  searchMovies: (query, page = 1) => fetchTMDB('/search/movie', { query, page }),
};
