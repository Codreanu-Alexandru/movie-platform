import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {
  @Input() user?: User;

  infoMovie: Movie | undefined;
  currentMovies: Movie[];
  allUserMovies: Movie[] = [];

  constructor(private service: MovieServiceService, private authService: AuthService, private router: ActivatedRoute) {
    this.currentMovies = [];
    let user: User = {
      id: 2,
      email: "janet.weaver@reqres.in",
      username: "Janet Weaver",
      password: "password123",
      scores: [
        {
          idMovie: 2,
          Score: 10
        },
        {
          idMovie: 4,
          Score: 8
        },
        {
          idMovie: 8,
          Score: 9
        },
        {
          idMovie: 9,
          Score: 9
        },
        {
          idMovie: 14,
          Score: 10
        },
        {
          idMovie: 16,
          Score: 8
        },
        {
          idMovie: 17,
          Score: 7
        },
        {
          idMovie: 18,
          Score: 7
        },
        {
          idMovie: 21,
          Score: 9
        },
        {
          idMovie: 22,
          Score: 9
        },
        {
          idMovie: 23,
          Score: 9
        },
        {
          idMovie: 24,
          Score: 10
        },
        {
          idMovie: 29,
          Score: 6
        },
        {
          idMovie: 30,
          Score: 8
        },
        {
          idMovie: 31,
          Score: 9
        },
        {
          idMovie: 33,
          Score: 2
        },
        {
          idMovie: 34,
          Score: 9
        },
        {
          idMovie: 33,
          Score: 10
        },
        {
          idMovie: 37,
          Score: 6
        }
      ]
    };
    this.service.User = this.user != undefined ? this.user : user;
    this.allUserMovies = service.UserMovies;
    this.onPageIndexChanged(1);
  }
  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      const parameterValue = params['id'];
      this.user = this.authService.getUsers().find(u => u.id == parameterValue);
      this.service.User = this.user;
      this.allUserMovies = this.service.UserMovies;
      this.onPageIndexChanged(1);
    });
  }

  onMovieSelected(event: any) {
    let movieIndex = -1;
    this.allUserMovies.forEach((element, index) => {
      if (event.id == element.id) {
        movieIndex = index;
      }
    });

    if (movieIndex != -1) {
      this.onPageIndexChanged(Math.ceil((movieIndex + 1) / 6));
    }

    this.infoMovie = event;
  }

  deleteRow(row: Movie) {
    const index = this.allUserMovies.findIndex(m => m === row);
    if (index > -1) {
      this.allUserMovies.splice(index, 1);
    }
    const indexCurrent = this.currentMovies.findIndex(m => m == row);
    if (indexCurrent > -1) {
      this.currentMovies.splice(indexCurrent, 1);
      this.onPageIndexChanged(Math.ceil((indexCurrent + 1) / 6));
    }
  }

  infoRow(row: Movie) {
    this.infoMovie = row;
  }

  modifyRow(row: Movie) {
    //form here
  }

  sortBy(what: string) {
    switch (what) {
      case 'title':
        this.allUserMovies.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'runtime':
        this.allUserMovies.sort((a, b) => b.runtime - a.runtime);
        break;
      case 'releaseDate':
        this.allUserMovies.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
        break;
      case 'score':
        this.allUserMovies.sort((a, b) => b.score - a.score);
        break;
      case 'yourScore':
        this.allUserMovies.sort((a, b) => b.userScore - a.userScore);
        break;
      case 'genres':
        this.allUserMovies.sort((a, b) => b.genres.length - a.genres.length);
        break;
      case 'rating':
        this.allUserMovies.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Invalid property, do nothing
        break;
    }

    this.onPageIndexChanged(1);
  }
  onPageIndexChanged(pageIndex: number): void {
    const startIndex = (pageIndex - 1) * 6;
    this.currentMovies = this.allUserMovies.slice(startIndex, startIndex + 6);
  }
  getColorClass(value: number): string {
    if (value == -1) {
      return 'gray';
    }
    if (value >= 0 && value < 2.5) {
      return 'red';
    } else if (value >= 2.5 && value < 5) {
      return 'orange';
    } else if (value >= 5 && value < 7.5) {
      return 'yellow';
    } else if (value >= 7.5 && value < 9) {
      return 'green'
    } else if (value >= 9 && value <= 10) {
      return 'blue';
    } else {
      return '';
    }
  }

  logOut() {
    this.authService.logOut();
  }
}
