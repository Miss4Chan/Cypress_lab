import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";
import { EmptyBasket } from "cypress/pageObjects/basket/emptyBasket";
import { AddDeleteMethods } from "cypress/pageObjects/addDelete/addDelete.methods";

//group tests inside describe
describe('addAndDeleteTesting', () =>{
    var login = new LoginMethods();
    var products = new ProductMethods();
    var emptyBasket = new EmptyBasket();
    var addDelete = new AddDeleteMethods();
    //In order to test the functionality of the app we need to be logged in to access functions such as add or delete
    beforeEach(function () {
        login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
        login.login('test@test.com', 'testtrebadae10');
        login.verifySuccessfullLogin();
        emptyBasket.emptyBasket();  
        });


        it('User should be able to add item into basket and remove it from there', () => {
          addDelete.searchForProduct('apple juice');
          addDelete.addToBasket();
          addDelete.verifyAddToBasket();
          addDelete.showBasket();
          emptyBasket.emptyBasket();
          addDelete.verifyDeleteFromBasket();
        });
        //TODO: Maybe more elements are added and should be deleted 
        //Best to use empty basket to clear all elements
        it('User should be able to add item into basket and remove it from there', () => {
          addDelete.searchForProduct('apple juice');
          addDelete.addToBasket();
          addDelete.verifyAddToBasket();
          //TODO: issue with retyping another elements have to press the X button on the prev seach
          //TODO: optimize searching in one function? alongiside addition?
          addDelete.resetSearch();
          addDelete.searchForProduct('banana juice');
          addDelete.addToBasket();
          addDelete.verifyAddToBasket();
          addDelete.showBasket();
          emptyBasket.emptyBasket();
          addDelete.verifyDeleteFromBasket();
        });
})