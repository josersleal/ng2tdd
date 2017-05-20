import { Clibasev1Page } from './app.po';

describe('clibasev1 App', () => {
  let page: Clibasev1Page;

  beforeEach(() => {
    page = new Clibasev1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
