import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { EngToPerPipeModule } from './pipes/eng-to-per/eng-to-per.pipe.module';
import { RialToTomanPipeModule } from './pipes/rial-to-toman/rial-to-toman.pipe';



@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    EngToPerPipeModule,
    RialToTomanPipeModule
  ],
  exports:[EngToPerPipeModule,RialToTomanPipeModule]
})
export class SamonPersianNumbersModule { }
