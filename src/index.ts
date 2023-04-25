import { Genre, Movie } from "./index.types";
import { movies } from "./db.json";

const getRandomNumber = (limit: number): number => {
  return Math.floor(Math.random() * limit);
};

export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
  if (genres.length == 0) return [movies[getRandomNumber(movies.length)]];

    return movies.filter((movie)=> movie.genres.every((genre)=>genres.includes(genre as Genre) )).sort((a,b)=>b.genres.length-a.genres.length)
};