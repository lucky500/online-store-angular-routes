<<<<<<< HEAD
import { browser, by, element } from 'protractor';

export class AppPage {
=======
import { browser, element, by } from 'protractor';

export class OnlineStorePracticePage {
>>>>>>> 1824f4b0ec3b1e4ca44682ca749719e2cd32a199
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
