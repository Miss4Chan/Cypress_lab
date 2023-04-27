//Register starts at http://localhost:3000/#/register
//Imma do this in POM
import { RegisterMethods } from "cypress/pageObjects/register/register.methods";

describe('auto register test', () => {
    var register = new RegisterMethods();

    it('User should be able to register', () => {
      register.visitRegister();
      cy.wait(1000);
      register.register('test@test.com','testtrebadae10','test');
    })
  });