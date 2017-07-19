# DateAsyncFormatPipe

Pipe to format date with async format retrival.
E.g. this can be helpful when using [ng2-translate](https://www.npmjs.com/package/ng2-translate)

Date is formated with [moment.js](http://momentjs.com)

## How to use
### Module import
```ts
import { DateAsyncFormatModule } from "date-async-format-pipe";

@NgModule({
    imports: [
        DateAsyncFormatModule
    ]
})
export class SomeModule {
}
```

### template
`date | dateFormatAsync : format`

### Where
- `date`: any valid date input for [moment.js](http://momentjs.com).
- `format`: `Observable<string>` that resolves with valid [moment.js](http://momentjs.com) format patterns.

## Example
```ts
@Component({
  template: `<div>{{ date | dateFormatAsync : dateFormat$ }}</div> `
})
class SomeComponent {
  public date: Date;
  public dateFormat$: Observable<string>;

  constructor(private translate: TranslateService) {
    this.date = new Date();
    this.dateFormat$ = translate.get("TIME_SHORT")
  }
}
```
