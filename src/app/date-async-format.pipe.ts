import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';
import { MomentInput } from 'moment';

/**
 * Angular pipe that retrieves date format from an Observable and
 * formats given date with moment.js
 */
@Pipe({
  name: 'dateFormatAsync',
  pure: false
})
export class DateAsyncFormatPipePipe implements PipeTransform {
  private cachedDateFormat: string = null;
  private cachedDateFormat$: Observable<string> = null;
  private cachedDateFormatSubscription: Subscription;

  private observe(dateFormat$: Observable<string>) {
    if (dateFormat$ !== this.cachedDateFormat$) {
      if (this.cachedDateFormatSubscription) {
        this.cachedDateFormatSubscription.unsubscribe();
      }

      this.cachedDateFormat$ = dateFormat$;
      this.cachedDateFormatSubscription = this.cachedDateFormat$
        .subscribe((dateFormat: string) => {
          this.cachedDateFormat = dateFormat;
        });
    }
  }

  transform(value: MomentInput, dateFormat$: Observable<string>): any {
    this.observe(dateFormat$);

    if (this.cachedDateFormat) {
      return moment(value).format(this.cachedDateFormat);
    }

    return '';
  }
}
