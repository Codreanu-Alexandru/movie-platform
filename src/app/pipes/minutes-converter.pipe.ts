import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesConverter'
})
export class MinutesConverterPipe implements PipeTransform {

  transform(minutes: number): string {
    if (minutes < 0) {
      return 'N/A'
    }

    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedTime = `${hours}h ${remainingMinutes}m`;

    return formattedTime;
  }

}
