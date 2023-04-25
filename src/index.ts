import { Genre, Movie } from "./index.types";
import { movies } from "./db.json";

/**
 * This function generates a random number within a specified limit
 * @param limit The maximum limit of the random number generation
 * @returns The generated random number 
 */
const getRandomNumber = (limit: number): number => {
  return Math.floor(Math.random() * limit);
};

/**
 * This function filters and sorts an array of movies based on the provided genres.
 * @param genres An array of genres to filter  the movies by. 
 * @returns An array of movies that match the provided genres, sorted by the number of matching genres.
 */
export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
  // if no genres specified, return a random movie
  if (genres.length == 0) return [movies[getRandomNumber(movies.length)]];

    return movies.filter((movie)=> movie.genres.every((genre)=>genres.includes(genre as Genre) )).sort((a,b)=>b.genres.length-a.genres.length)
};

/*
Filtering the movies array based on the genres array.
Sorting the filtered array by the length of each movie's genres array.
The time complexity of filtering an array of length n is O(n), as each element of the array needs to be checked once.

The time complexity of the .every method used to check if all genres of a movie are included in the genres array is also O(n), where n is the length of the genres array.

The time complexity of sorting an array of length n using JavaScript's built-in sort method is typically O(nlogn).

Therefore, the overall time complexity of the given code is O(n * m * log(n)), where n is the length of the movies array, and m is the length of the genres array. This assumes that the bottleneck is the sorting operation, which may not be the case if the number of genres is very small or if the number of movies is very large.

The space complexity of the function is proportional to the size of the filtered array, which can be at most the same size as the movies array.
 */
