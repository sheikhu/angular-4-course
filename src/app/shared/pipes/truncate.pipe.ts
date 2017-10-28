import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
  transform( value: string, length = 10): any {
    if (value.length <= 10) {
      return value;
    }
    return value.substr(0, length).concat('...');
  }
}
