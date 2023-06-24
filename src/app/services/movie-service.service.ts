import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import MovieData from '../resources/Movies.json';
import { Subject } from 'rxjs';
import UserCollectionData from '../resources/UserCollection.json';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  Movies: Movie[] = MovieData;
  CurrentUser?: User;
  CurrentUserMovies?: Movie[];
  MovieSubject = new Subject<Movie[]>();
  constructor() { }

  setMovies() {
    if (this.CurrentUser !== undefined) {
      const userCollection = UserCollectionData.find(
        (uc) => uc.idUser === this.CurrentUser?.id
      );

      if (userCollection !== undefined) {
        this.CurrentUserMovies = MovieData.filter((movie) =>
          userCollection.scores.some((score) => score.idMovie === movie.id)
        );

        this.CurrentUserMovies.forEach((movie) => {
          const score = userCollection.scores.find(
            (score) => score.idMovie === movie.id
          );
          movie.userScore = score?.Score;
        });
      }
    }
  }

  get allMovies(): Movie[] {
    return this.Movies;
  }

  set allMovies(newMovies: Movie[]) {
    this.Movies = newMovies;
    this.MovieSubject.next(newMovies);
  }

  set currentUser(user: User) {
    this.CurrentUser = user;
  }

  get currentUser(): User | undefined {
    return this.CurrentUser;
  }

  get movies(): Movie[] | undefined {
    if (this.CurrentUser == undefined) {
      return this.allMovies;
    }
    else {
      return this.CurrentUserMovies;
    }
  }

  set movies(newMovies: Movie[]) {
    if (this.currentUser == undefined) {
      this.Movies = newMovies;
    }
    else {
      this.CurrentUserMovies = newMovies;
      this.MovieSubject.next(this.CurrentUserMovies);
    }
  }

  deleteMovie(movie: Movie) {
    if (this.CurrentUser == undefined) {
      const index = this.Movies.findIndex(() => movie);
      if (index != -1) {
        this.Movies.splice(index, 1);
        this.MovieSubject.next(this.Movies);
      }
    }
    else {
      const index = this.CurrentUserMovies?.findIndex(() => movie);
      if (index != -1 && this.CurrentUserMovies != undefined && index != undefined) {
        this.CurrentUserMovies.splice(index, 1);
        this.MovieSubject.next(this.CurrentUserMovies);
      }
    }
  }

  addMovie(movie: Movie) {
    if (this.CurrentUser == undefined) {
      this.Movies.push(movie);
      this.MovieSubject.next(this.Movies);
    }
    else {

      this.CurrentUserMovies?.push(movie);
      if (this.CurrentUserMovies != undefined) {
        this.MovieSubject.next(this.CurrentUserMovies);
      }
    }
  }

}
