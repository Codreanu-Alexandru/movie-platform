import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import MovieData from '../resources/Movies.json';
import { Subject } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  movies: Movie[];
  user?: User;
  userMovies: Movie[];

  constructor() {
    this.movies = MovieData;
    this.userMovies = [];
  }

  private setMovies() {
    if (this.user !== undefined) {
      const userMovieIds = this.user.scores.map((score) => score.idMovie);
      this.userMovies = MovieData.filter((movie) => {
        if (userMovieIds.includes(movie.id) && this.user != undefined) {
          const score = this.user.scores.find((s) => s.idMovie === movie.id);
          if (score) {
            movie.userScore = score.Score;
            return true;
          }
        }
        return false;
      });
    }
  }

  get Movies(): Movie[] {
    return this.Movies;
  }

  set Movies(newMovies: Movie[]) {
    this.Movies = newMovies;
  }

  set User(user: User | undefined) {
    this.user = user;
    this.setMovies();
  }

  get User(): User | undefined {
    return this.user;
  }

  get UserMovies(): Movie[] {
    if (this.user == undefined) {
      return this.movies;
    }
    else {
      return this.userMovies;
    }
  }

  set UserMovies(newMovies: Movie[]) {
    if (this.user == undefined) {
      this.Movies = newMovies;
    }
    else {
      this.userMovies = newMovies;
    }
  }

  // deleteMovie(movie: Movie) {
  //   if (this.CurrentUser == undefined) {
  //     const index = this.Movies.findIndex(() => movie);
  //     if (index != -1) {
  //       this.Movies.splice(index, 1);
  //       this.MovieSubject.next(this.Movies);
  //     }
  //   }
  //   else {
  //     const index = this.CurrentUserMovies?.findIndex(() => movie);
  //     if (index != -1 && this.CurrentUserMovies != undefined && index != undefined) {
  //       this.CurrentUserMovies.splice(index, 1);
  //       this.MovieSubject.next(this.CurrentUserMovies);
  //     }
  //   }
  // }

  // addMovie(movie: Movie) {
  //   if (this.CurrentUser == undefined) {
  //     this.Movies.push(movie);
  //     this.MovieSubject.next(this.Movies);
  //   }
  //   else {

  //     this.CurrentUserMovies?.push(movie);
  //     if (this.CurrentUserMovies != undefined) {
  //       this.MovieSubject.next(this.CurrentUserMovies);
  //     }
  //   }
  // }

}
