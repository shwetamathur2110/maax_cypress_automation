/// <reference types="cypress" />

const { LandingPage } = require("../../support/page_objects/landing_page.po");
const { WhereToBuy } = require("../../support/page_objects/where_to_buy.po");

const landingPage = new LandingPage();
const whereToBuy = new WhereToBuy();

describe('Where to Buy feature', () => {
  it('TC#1: Verify where to buy functionality using Get by Location', () => {
    cy.visit('/'); 

    landingPage.acceptAllCookies.click();

    landingPage.clickOnWhereToBuyButton();

    whereToBuy
			.verifyWhereToBuyPageSuccessfullyLoaded()
      .clickOnGetMyLocationButton()
      .validateDealersFoundResults();

  })

  it('TC#2: Verify where to buy functionality using a specific address details', () => {
    cy.visit('/');

    landingPage.acceptAllCookies.click();

    landingPage.clickOnWhereToBuyButton();

    whereToBuy
			.verifyWhereToBuyPageSuccessfullyLoaded()
      .enterAddressDetails("Scarborough")
      .validateDealersFoundResults();

  })
})
