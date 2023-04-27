import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { EmptyBasket } from "cypress/pageObjects/basket/emptyBasket";
import { AddDeleteMethods } from "cypress/pageObjects/addDelete/addDelete.methods";
import { outOfStockMethods } from "cypress/pageObjects/outOfStock/outOfStock.methods";
/*
Ideas: test for an item that is out of stock but 
test with an item that has only one left to see if more can be added. :)
 */
describe('outOfStock', () => {
    var login = new LoginMethods();
    var emptyBasket = new EmptyBasket();
    var addDelete = new AddDeleteMethods();
    var outOfStock =  new outOfStockMethods();
  
    beforeEach(() => {
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login('test@test.com', 'testtrebadae10');
        login.verifySuccessfullLogin();
        emptyBasket.emptyBasket();  ;
    });
  
    it('Out of stock items should not be added', () => {
        addDelete.searchForProduct("King of the Hill");
        addDelete.addToBasket();
        outOfStock.verifyNotAddedToBasket();
    });
      
    it('Items that go out of stock should not be added anymore', () => {
        addDelete.searchForProduct("Artwork"); //Has only one left 
        //TODO: maybe for elements that have left more than 1??
        addDelete.addToBasket();
        addDelete.addToBasket();
        outOfStock.verifyNotAddedToBasketTwice();
    });

  });