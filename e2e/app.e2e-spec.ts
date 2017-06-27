import { LOGerPage } from './app.po';

describe('loger App', () => {
  let page: LOGerPage;

  beforeEach(() => {
    page = new LOGerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
