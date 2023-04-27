import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";

/*
First testing attepmt
Dinamically added table makes the deletion process without id of the elements virtually impossible.
Best way to test deletion on its own is to use a function which starts at the bottom and deletes upward all elements. 
Deletion of the entire basket made possible with the emptyBasket() method. -- Updated in usage of POM tests
*/
//group tests inside describe
describe('addAndDeleteTesting', () =>{
    var login = new LoginMethods();
    var products = new ProductMethods();
    //In order to test the functionality of the app we need to be logged in to access functions such as add or delete
    beforeEach(function () {
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login('test@test.com', 'testtrebadae10');
        login.verifySuccessfullLogin();

            // Empty basket Attempt 52342 :( update: IT WORKSSSSS
            cy.get('[aria-label="Show the shopping cart"]').click();
            cy.wait(1000);
            cy.get('.mat-table').then(($table) => { 
                if ($table.find('.mat-row').length > 0) { //get table
                cy.get('.mat-table .mat-row', {timeout: 10000}).then(($rows) => {  //Get all the rows that have elements, leave timeout to load
                  if ($rows.length > 0) { //if there are rows
                    for (let i = $rows.length - 1; i >= 0; i--) { //start from the end and click delete on all of the elements
                      cy.wrap($rows[i]).find('.mat-cell .mat-icon-button').eq(2).click();
                    }
                    //Verification to see that its truly empty and the notification works
                    cy.get('.mat-table').should('have.length', 1); 
                    cy.wrap($table).should('not.contain', '.mat-row'); 
                  }
                });
            } else {
                cy.wrap($table).should('not.contain', '.mat-row');
              }
              });    
          });
      it('User should be able to add item into basket and remove it from there', () => {
        cy.get('.fa-3x.warn-notification').should('have.text', '0');
        //TODO:There is a max limit of 5 :))))) test for increase not from start. Repeating tests fill basket. Empty it??
        cy.get('.mat-search_icon-search').click();
        cy.get('#mat-input-0').type('apple juice');
        cy.get('#mat-input-0').type('{enter}');
        cy.get('[aria-label="Add to Basket"]').click();
        cy.get('.fa-3x.warn-notification').should('have.text', '1');
        //Means successful add if its 1
        cy.get('[aria-label="Show the shopping cart"]').click();
        //TODO: check if first child this test only works with 1 item in basket
        cy.get('.mat-table .mat-cell .mat-icon-button').eq(2).click(); //The 3rd element is the delete button
        //verify that the element is really gone meaning only header is left in the dynamically created table
        cy.get('.mat-table').children().should('have.length', 1);
      })
})