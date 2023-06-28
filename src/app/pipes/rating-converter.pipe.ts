import { Pipe, PipeTransform } from '@angular/core';
import { MiscServicesService } from '../services/misc-services.service';

@Pipe({
  name: 'ratingConverter'
})
export class RatingConverterPipe implements PipeTransform {

  constructor(private service: MiscServicesService) { }

  transform(rating: number): string {
    return this.service.getRatingById(rating).name;
  }

}
