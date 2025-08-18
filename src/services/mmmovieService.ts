import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "903340e60645b6923101a22cd7bf51a1";

interface FetchMoviesResponse {
  results: Movie[];
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get<FetchMoviesResponse>(BASE_URL, {
      params: {
        query,
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Помилка при загрузці фільмів:", error);
    return [];
  }
};
