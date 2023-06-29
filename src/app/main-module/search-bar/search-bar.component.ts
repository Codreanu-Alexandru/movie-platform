import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() movieFromSearchBar: EventEmitter<Movie> = new EventEmitter<Movie>;
  movies: Movie[];
  currentSearch?: string;

  searchTerm!: string;
  searchResults!: Movie[];

  constructor(private service: MovieServiceService, private router: Router) {
    this.movies = this.service.UserMovies;
  };

  search() {
    if (!this.searchTerm) {
      this.searchResults = [];
      return;
    }

    this.searchResults = this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSearchMovie(movie: Movie) {
    this.movieFromSearchBar.emit(movie);
    this.searchTerm = '';
    this.searchResults = [];
  }
}