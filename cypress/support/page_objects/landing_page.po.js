export class LandingPage{
    get allMenuOptions(){
        return cy.get('.full-options');
    }

    get whereToBuyLink(){
        return cy.get('a[title="Where to Buy"]');
    }

    get acceptAllCookies(){
        return cy.get('button#onetrust-accept-btn-handler');
    }

    get searchInput(){
        return cy.get('input.search-input')
    }

    get searchResultListBox(){
        return cy.get('#react-autowhatever-1 > .search-list')
    }

    get numberOfItemsInList(){
        return this.searchResultListBox.find('li > a[target=_self]');
    }

    get noResultsFoundInSearchList(){
        return cy.get('#react-autowhatever-1--item-0 > div')
    }

    get viewMoreLink(){
        return this.searchResultListBox.find('li > a').last();
    }

    /**
     * This method clicks on the where to buy link 
     */
    clickOnWhereToBuyButton(){
        this.allMenuOptions.within(() =>{
            this.whereToBuyLink.click();
        })

        return this;
    }

   /**
    * This method is used to validate the search list box after entering a product type
    * @param {*} productType 
    * @param {*} productExistance 
    * @returns 
    */
    verifySearchListBox(productType, productExistance){
        if(productExistance == 'Exists'){
            this.searchResultListBox.should('be.visible')

            this.numberOfItemsInList.should('have.length', 3);
        
            this.viewMoreLink.should('be.visible');

            this.numberOfItemsInList.each(($el) =>{
                expect($el.text()).contain(productType);
            });
        }else
            this.noResultsFoundInSearchList.should('have.text','Sorry no results found')       

        return this;
    }

    

}