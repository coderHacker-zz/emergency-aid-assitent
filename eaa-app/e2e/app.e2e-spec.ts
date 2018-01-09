import { EaaAppPage } from './app.po';

describe('eaa-app App', () => {
  let page: EaaAppPage;

  beforeEach(() => {
    page = new EaaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
