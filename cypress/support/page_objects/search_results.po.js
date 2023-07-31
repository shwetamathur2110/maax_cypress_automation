export class SearchResults{
    get allTabList(){
        return cy.get('ul.react-tabs__tab-list');
    }

    get tab(){
        return this.allTabList.find('li');
    }

    get filters(){
        return cy.get('div.filters');
    }

    get productsCard(){
        return cy.get('.product-card.productCard');
    }

    get viewMoreButton(){
        return cy.get('div.row > div > button');
    }

    /**
     * This method verifies the page that is displayed when a user searches with a product and enter to see the list of matching products available
     */
    verifySearchResultPage(){
        const expectedTabs = ["Product(s)", "Content"];

        this.allTabList.should('be.visible');

        this.tab.each(($el, i) =>{
            expect($el.text()).contains(expectedTabs[i])
        });

        this.filters.should('be.visible');

        this.productsCard.should('be.visible');

        this.viewMoreButton.should('have.text', "View 12 More");
    }

    get singleProductOverviewPage(){
        return cy.get('#overview');
    }

    get productNameHeader(){
        return cy.get('.overview-header > h1');
    }

    get productImageSection(){
        return cy.get('div.carousel');
    }

    get productOverviewSection(){
        return cy.get('div.overview');
    }

    get productInformationSection(){
        return cy.get('#information');
    }

    get productTechnicalSpecificationSection(){
        return cy.get('#specs');
    }

    get productAccessoriesSection(){
        return cy.get('#accessories');

    }

    /**
     * This method verifies the single product page that is displayed when user click on a single product from the search list
     * @param {*} productType 
     * @returns 
     */
    verifySingleProductDisplayedPage(productType){

        this.singleProductOverviewPage.should('be.visible');

        this.productImageSection.should('be.visible');

        this.productOverviewSection.should('be.visible');

        this.productInformationSection.should('be.visible');

        this.productTechnicalSpecificationSection.should('be.visible');

        this.productAccessoriesSection.should('be.visible');

        this.productNameHeader.should('contain.text', productType);

        return this;

    }

    get noResultsFoundMessage(){
        return cy.get('div.message');
    }

    /**
     * This method verifies the no results found page
     * @param {} productType 
     */
    verifyNoResultsFoundSection(productType){
        this.noResultsFoundMessage.should('have.text', "No search results for  '" + productType + "'");
    }

}