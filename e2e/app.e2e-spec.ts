import { DateAsyncFormatPipePage } from './app.po';

describe('date-async-format-pipe App', () => {
  let page: DateAsyncFormatPipePage;

  beforeEach(() => {
    page = new DateAsyncFormatPipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
