import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import MovieData from '../resources/Movies.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  Movies: Movie[] = MovieData;
  MovieSubject = new Subject<Movie[]>();
  constructor() { }

  get movies(): Movie[] {
    return this.Movies;
  }

  set movies(newMovies: Movie[]) {
    this.Movies = newMovies;
    this.MovieSubject.next(newMovies);
  }

  deleteMovie(movie: Movie) {
    const index = this.Movies.findIndex(() => movie);
    if (index != -1) {
      this.Movies.splice(index, 1);
      this.MovieSubject.next(this.Movies);
    }
  }

  addMovie(movie: Movie) {
    this.Movies.push(movie);
    this.MovieSubject.next(this.Movies);
  }
}
