import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { EmptyBasket } from "cypress/pageObjects/basket/emptyBasket";
/*
Ideas: test for an item that is out of stock but 
test with an item that has only one left to see if more can be added. :)
 */
describe('outOfStock', () =>{
    var login = new LoginMethods();
    var emptyBasket = new EmptyBasket();

    beforeEach(function () {
      login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
      login.login('test@test.com', 'testtrebadae10');
      login.verifySuccessfullLogin();
      emptyBasket.emptyBasket();  
      });
      
    it('Out of stock items should not be added', () => {
        cy.get('.fa-3x.warn-notification').should('have.text', '0');
        cy.get('.mat-search_icon-search').click();
        cy.get('#mat-input-0').type('King of the Hill');
        cy.get('#mat-input-0').type('{enter}');
        cy.get('[aria-label="Add to Basket"]').click();
        cy.get('.fa-3x.warn-notification').should('have.text', '0');
        cy.get('[aria-label="Show the shopping cart"]').click();
        cy.get('.mat-table').children().should('have.length', 1);
      })
})