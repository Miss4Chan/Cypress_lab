import { RegisterElements } from "./register.elements";

export class RegisterMethods{
    register(email: string, password: string, seqAns: string ){
        RegisterElements.ElementsRegister.getTxtEmail().type(email);
        RegisterElements.ElementsRegister.getTxtPassword().type(password);
        RegisterElements.ElementsRegister.getTxtPasswordRepeat().type(password);
        RegisterElements.ElementsRegister.getSeqQ().click();
        RegisterElements.ElementsRegister.getSeqQElement().click();
        RegisterElements.ElementsRegister.getSeqQAns().type(seqAns);
        //Wait for button enable after entering all info
        cy.wait(1000);
        RegisterElements.ElementsRegister.getBtnReg().click()
    }
    visitRegister()
    {
        cy.visit('http://localhost:3000/#/register');
        cy.wait(1000);
        RegisterElements.ElementsRegister.getBtnCloseDialog().should('be.visible')
        RegisterElements.ElementsRegister.getBtnCloseDialog().click();
    }
}