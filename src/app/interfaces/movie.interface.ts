import { Genre } from "./genre.interface";
import { Rating } from "./rating.interface";

export interface Movie {
    id: number,
    image: string,
    title: string,
    runtime: number,
    releaseDate: string,
    score: number,
    userScore: number,
    genres: number[],
    rating: number
}