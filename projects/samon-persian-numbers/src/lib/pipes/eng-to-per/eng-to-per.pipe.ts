import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'EngToPer'
})
export class EngToPerPipe implements PipeTransform {

  transform(value: number | string ,...args: unknown[]): string {
    if (value === null || value === undefined) {
      return '';
    }
      var output: string = value.toString();
      output = output.replace(/0/gi, '۰');
      output = output.replace(/1/gi, '۱');
      output = output.replace(/2/gi, '۲');
      output = output.replace(/3/gi, '۳');
      output = output.replace(/4/gi, '۴');
      output = output.replace(/5/gi, '۵');
      output = output.replace(/6/gi, '۶');
      output = output.replace(/7/gi, '۷');
      output = output.replace(/8/gi, '۸');
      output = output.replace(/9/gi, '۹');
      return output;
  }

}
