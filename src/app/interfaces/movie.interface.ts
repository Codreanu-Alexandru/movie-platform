import { Genre } from "./genre.interface";
import { Rating } from "./rating.interface";

export interface Movie {
    id: number,
    image: string,
    title: string,
    runtime: number,
    releaseDate: Date,
    score: number,
    userScore?: number,
    genres: Genre[],
    rating: Rating
}