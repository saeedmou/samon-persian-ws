import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { EngToPerPipeModule } from './pipes/eng-to-per/eng-to-per.pipe.module';



@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    EngToPerPipeModule
  ],
  exports:[EngToPerPipeModule]
})
export class SamonPersianNumbersModule { }
