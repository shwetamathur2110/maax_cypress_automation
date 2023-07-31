export class WhereToBuy{
    get title(){
        return cy.get('.section-title > h1');
    }

    get addressTypeField(){
        return cy.get('#geocoder');
    }

    get addressTypeFieldInput(){
        return cy.get('input.mapboxgl-ctrl-geocoder--input');
    }

    get getMyLocationButton(){
        return cy.get('button.btn-location');
    }

    get map(){
        return cy.get('#map');
    }

    get dealerCountFound(){
        return cy.get('.count-dealers > .count');
    }

    get dealersList(){
        return cy.get('[data-list-resellers]');
    }

    get dealersListPagination(){
        return cy.get('.store-dealer-navigation');
    }

    get filters(){
        return cy.get('#filters');
    }

    /**
     * This method is used to verify where to buy page is successfully loaded
     * @returns 
     */
    verifyWhereToBuyPageSuccessfullyLoaded(){
        this.title.should('have.text',"Where to Buy");

        this.addressTypeField.should('be.visible');

        this.getMyLocationButton.should('be.visible');

        return this;
    }

    /**
     * This method clicks on Get My Location button
     * @returns 
     */
    clickOnGetMyLocationButton(){
        this.getMyLocationButton.click();

        return this;
    }

    /**
     * This method enters the address details in the input field
     * @param {*} detail: Complete Address, City, Street name or Zipcode
     */
    enterAddressDetails(detail){
        this.addressTypeFieldInput.type(detail + '{enter}');

        return this;
    }

    /**
     * This method validates the result after the location is specified
     * @returns 
     */
    validateDealersFoundResults(){
        this.map.should('be.visible');

        this.dealersList.should('be.visible');

        this.dealersListPagination.should('be.visible');

        this.filters.should('be.visible');

        this.dealerCountFound.invoke('text').then(parseFloat).should('be.greaterThan', 0);

        return this;
    }
}