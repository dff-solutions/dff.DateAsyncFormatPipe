import { Pipe } from '@angular/core';
import * as moment from 'moment';
/**
 * Angular pipe that retrieves date format from an Observable and
 * formats given date with moment.js
 */
export class DateAsyncFormatPipe {
    constructor() {
        this.cachedDateFormat = null;
        this.cachedDateFormat$ = null;
    }
    observe(dateFormat$) {
        if (dateFormat$ !== this.cachedDateFormat$) {
            if (this.cachedDateFormatSubscription) {
                this.cachedDateFormatSubscription.unsubscribe();
            }
            this.cachedDateFormat$ = dateFormat$;
            this.cachedDateFormatSubscription = this.cachedDateFormat$
                .subscribe((dateFormat) => {
                this.cachedDateFormat = dateFormat;
            });
        }
    }
    transform(value, dateFormat$) {
        this.observe(dateFormat$);
        if (this.cachedDateFormat) {
            return moment(value).format(this.cachedDateFormat);
        }
        return '';
    }
}
DateAsyncFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'dateFormatAsync',
                pure: false
            },] },
];
/** @nocollapse */
DateAsyncFormatPipe.ctorParameters = () => [];
//# sourceMappingURL=date-async-format.pipe.js.map