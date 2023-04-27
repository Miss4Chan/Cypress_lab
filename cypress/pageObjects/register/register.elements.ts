//Register starts at http://localhost:3000/#/register
//Imma do this in POM
export class RegisterElements {
    static get ElementsRegister() {
        return {
            getTxtEmail:() => cy.get('#emailControl'),
            getTxtPassword:()=>cy.get('#passwordControl'),
            getTxtPasswordRepeat:()=>cy.get('#repeatPasswordControl'),
            getSeqQ:()=> cy.get('[aria-label="Selection list for the security question"]'),
            //Cannot do just select since it is not a list its an angular component mat-select....:///
            getSeqQElement:()=>cy.contains('mat-option', " Mother's maiden name? "),
            getSeqQAns:()=>cy.get('#securityAnswerControl'),
            getBtnReg:()=>cy.get('#registerButton'),
            getBtnCloseDialog: () =>cy.get('.close-dialog')
        }
    }
}