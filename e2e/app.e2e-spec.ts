import { EricssonTvPage } from './app.po';

describe('ericsson-tv App', function() {
  let page: EricssonTvPage;

  beforeEach(() => {
    page = new EricssonTvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
