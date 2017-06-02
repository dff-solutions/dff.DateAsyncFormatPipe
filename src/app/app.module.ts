import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateAsyncFormatPipePipe } from './date-async-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DateAsyncFormatPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
