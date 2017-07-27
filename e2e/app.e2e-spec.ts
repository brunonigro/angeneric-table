import { AngenericTablePage } from './app.po';

describe('angeneric-table App', () => {
  let page: AngenericTablePage;

  beforeEach(() => {
    page = new AngenericTablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
