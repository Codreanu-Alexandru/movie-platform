import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateConverter'
})
export class DateConverterPipe implements PipeTransform {

  transform(dateString: string): string {
    const dateParts = dateString.split('-');
    const year = dateParts[0];
    const month = this.getMonthName(parseInt(dateParts[1]));
    const day = this.getFormattedDay(parseInt(dateParts[2]));

    const formattedDate = `${day} of ${month}, ${year}`;

    return formattedDate;
  }

  private getMonthName(month: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return monthNames[month - 1] || '';
  }

  private getFormattedDay(day: number): string {
    let formattedDay = day.toString();

    if (formattedDay.length === 1) {
      formattedDay = day.toString().replace('0', '');
    }

    if (day >= 11 && day <= 13) {
      formattedDay += 'th';
    } else {
      const lastDigit = day % 10;

      switch (lastDigit) {
        case 1:
          formattedDay += 'st';
          break;
        case 2:
          formattedDay += 'nd';
          break;
        case 3:
          formattedDay += 'rd';
          break;
        default:
          formattedDay += 'th';
          break;
      }
    }

    return formattedDay;
  }
}
