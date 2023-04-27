import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { ProductMethods } from "cypress/pageObjects/products/products.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new ProductMethods();
  const testData = require('../fixtures/login.json')

  testData.loginData.forEach((testcase: { email: string; password: string; }) => {
    it('User should be able to login', () => {
      login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
      cy.wait(1000);
      login.login(testcase.email, testcase.password);
      login.verifySuccessfullLogin();
    })
  });
})