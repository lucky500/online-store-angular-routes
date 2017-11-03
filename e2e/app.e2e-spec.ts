<<<<<<< HEAD
import { AppPage } from './app.po';

describe('online-store App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
=======
import { OnlineStorePracticePage } from './app.po';

describe('online-store-practice App', () => {
  let page: OnlineStorePracticePage;

  beforeEach(() => {
    page = new OnlineStorePracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
>>>>>>> 1824f4b0ec3b1e4ca44682ca749719e2cd32a199
  });
});
