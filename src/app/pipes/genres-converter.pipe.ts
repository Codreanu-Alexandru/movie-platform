import { Pipe, PipeTransform } from '@angular/core';
import { MiscServicesService } from '../services/misc-services.service';

@Pipe({
  name: 'genresConverter'
})
export class GenresConverterPipe implements PipeTransform {

  constructor(private service: MiscServicesService) { }

  transform(genres: number[]): string {
    let actualGenres = this.service.getGenresByIds(genres);
    let output: string = '';
    actualGenres.forEach((element, index) => {
      output += element.name;
      if (index !== actualGenres.length - 1) {
        output += ', ';
      }
    });
    return output;
  }

}
