import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RialToToman'
})
export class RialToTomanPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value/10;
  }

}


@NgModule({
  declarations: [RialToTomanPipe],
  exports:[RialToTomanPipe]
})
export class RialToTomanPipeModule { }
