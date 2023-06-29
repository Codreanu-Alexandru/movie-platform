import { Component } from '@angular/core';
import { Genre } from 'src/app/interfaces/genre.interface';
import { Movie } from 'src/app/interfaces/movie.interface';
import { Rating } from 'src/app/interfaces/rating.interface';
import { MiscServicesService } from 'src/app/services/misc-services.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent {
  movieForm!: FormGroup;

  listOfRatings: Rating[];
  listOfGenres: Genre[];

  constructor(private service: MiscServicesService, private movieService: MovieServiceService) {
    this.listOfGenres = service.Genres;
    this.listOfRatings = service.Ratings;
  }
}
