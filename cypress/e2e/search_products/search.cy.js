/// <reference types="cypress" />

const { LandingPage } = require("../../support/page_objects/landing_page.po");
const { SearchResults } = require("../../support/page_objects/search_results.po");


const landingPage = new LandingPage();
const searchResults = new SearchResults();

describe('Search feature', () => {
  it('TC#3: Search with specific Product Type and open the list of products matching the product entered', () => {
    const productType = 'Shower';

    cy.visit('/'); 

    landingPage.acceptAllCookies.click();

    landingPage.searchInput.type(productType, { force: true });

    landingPage
      .verifySearchListBox(productType, 'Exists')
      .searchInput.clear().type('Sho', { force: true });

      landingPage
      .verifySearchListBox(productType, 'Exists')
      .searchInput.type('{enter}');

    searchResults.verifySearchResultPage();

  });

  it('TC#4: Search with specific Product Type and select a single product from search list box', () => {
    const productType = 'Bathtub';

    cy.visit('/'); 

    landingPage.acceptAllCookies.click();

    landingPage
      .searchInput.type(productType, { force: true })
      .invoke('attr', 'value')
      .should('eq', productType);

    landingPage
      .verifySearchListBox(productType, 'Exists')
      .numberOfItemsInList.last().click();

      searchResults.verifySingleProductDisplayedPage(productType);
  });

  it('TC#5: Search for a product that does not exists', () => {
    const productType = 'Random';

    cy.visit('/'); 

    landingPage.acceptAllCookies.click();

    landingPage.searchInput.type(productType, { force: true });

    landingPage
      .verifySearchListBox(productType, 'NotExists')
      .searchInput.type('{enter}');

      searchResults.verifyNoResultsFoundSection(productType);
  });


})
