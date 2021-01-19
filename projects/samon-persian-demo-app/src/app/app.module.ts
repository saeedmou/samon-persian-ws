import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamonPersianNumbersModule } from 'samon-persian-numbers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SamonPersianNumbersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
