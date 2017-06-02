import { DateAsyncFormatPipePipe } from './date-async-format.pipe';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';

import * as moment from 'moment';

describe('DateAsyncFormatPipePipe', () => {
  let pipe: DateAsyncFormatPipePipe;

  beforeEach(() => {
    pipe = new DateAsyncFormatPipePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    let testDate: Date;

    beforeEach(() => {
      testDate = new Date();
    });

    it('should format directly if observable is not async', () => {
      const format = 'YYYY-MM-DD';

      expect(pipe.transform(testDate, Observable.of(format)))
        .toBe(moment(testDate).format(format));
    });

    it('should return empty string if observable is asnyc', (done) => {
      const format = 'YYYY-MM-DD';
      const formatSubject: Subject<string> = new Subject();

      expect(pipe.transform(testDate, formatSubject)).toBe('');

      formatSubject.subscribe((df: string) => {
        expect(pipe.transform(testDate, formatSubject))
      }, null, done);

      formatSubject.next(format);
      formatSubject.complete();
    });

    it('should keep subscription', (done) => {
      const format1 = 'YYYY-MM-DD';
      const format2 = 'YYYY';
      const formatSubject: Subject<string> = new Subject();

      expect(pipe.transform(testDate, formatSubject)).toBe('');

      formatSubject.subscribe((df: string) => {
        expect(pipe.transform(testDate, formatSubject))
      }, null, done);

      formatSubject.next(format1);
      formatSubject.next(format2);
      formatSubject.complete();
    });

    it('should unsubscribe from prev date format observable', () => {
      const format1 = 'YYYY-MM-DD';
      const format2 = 'YYYY';

      expect(pipe.transform(testDate, Observable.of(format1)))
        .toBe(moment(testDate).format(format1));

      expect(pipe.transform(testDate, Observable.of(format2)))
        .toBe(moment(testDate).format(format2));
    });

    it('should fail with invalid observable', () => {
      expect(() => {
        pipe.transform(testDate, undefined);
      }).toThrow();
    });
  });
});
