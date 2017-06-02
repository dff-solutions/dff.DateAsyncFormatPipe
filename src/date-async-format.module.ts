import { NgModule } from '@angular/core';
import { DateAsyncFormatPipe } from './date-async-format.pipe';

@NgModule({
  declarations: [
    DateAsyncFormatPipe
  ],
  exports: [
    DateAsyncFormatPipe
  ]
})
export class DateAsyncFormatModule {}
