import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MomentInput } from 'moment';
/**
 * Angular pipe that retrieves date format from an Observable and
 * formats given date with moment.js
 */
export declare class DateAsyncFormatPipe implements PipeTransform {
    private cachedDateFormat;
    private cachedDateFormat$;
    private cachedDateFormatSubscription;
    private observe(dateFormat$);
    transform(value: MomentInput, dateFormat$: Observable<string>): any;
}
