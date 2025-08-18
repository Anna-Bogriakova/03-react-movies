import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get<FetchMoviesResponse>(BASE_URL, {
      params: { query },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Помилка при завантаженні фільмів:", error);
    return [];
  }
};
